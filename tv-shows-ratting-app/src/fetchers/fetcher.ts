export async function fetcher<T>(
  input: string | URL | globalThis.Request,
  init?: RequestInit
): Promise<T | undefined> {
  let data: T | undefined;
  const oldHeadersString = localStorage.getItem('userHeaders');
  console.log('Headeri iz LocalStorage: ', oldHeadersString);
  const oldHeaders = oldHeadersString
    ? JSON.parse(oldHeadersString)
    : undefined;
  console.log(oldHeaders);

  try {
    const response = await fetch(input, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        ...oldHeaders,
      },
      ...init,
    });

    // Provjeravamo je li odgovor uspješan
    if (!response.ok) {
      const errorText = await response.text(); // Pokušaj dobiti detalje o grešci iz odgovora
      console.error(`Greška u odgovoru: ${errorText}`);
      throw new Error(`Response status: ${response.status}, ${errorText}`);
    }

    // Provjeravamo je li odgovor prazan (204 No Content)
    const isNoContent = response.status === 204;

    if (!isNoContent) {
      // Čekamo na parsiranje tijela odgovora kao JSON
      data = await response.json();
      console.log('Podaci iz tijela odgovora: ', data);
    }

    // Ažuriramo lokalnu pohranu novim zaglavljima ako su prisutna
    const newHeaders = {
      'access-token': response.headers.get('access-token'),
      client: response.headers.get('client'),
      'token-type': response.headers.get('token-type'),
      expiry: response.headers.get('expiry'),
      uid: response.headers.get('uid'),
    };

    // Provjera i ažuriranje samo ako postoje novi podaci u zaglavljima
    if (newHeaders['access-token']) {
      console.log('Podaci iz Headera odgovora: ', newHeaders);
      localStorage.setItem('userHeaders', JSON.stringify(newHeaders));
    }
  } catch (error) {
    // Poboljšano hvatanje greške s više informacija
    console.error('Došlo je do greške tijekom fetch poziva:', error);
    // Ponovno bacamo grešku kako bi je vanjski kod mogao uhvatiti ili obraditi
    throw error;
  }

  // Vraćamo podatke ili undefined ako nije bilo sadržaja
  return data;
}
