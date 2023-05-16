export default async function handler(req, res) {

  const header = {
    'Content-Type': 'application/json',
    'Api-Token': '0304eb2402918f2e3facd2729a2cf0f5fe42dfc80848a6ed1a2191606f0087628ad1cded',
  }

  const apiUrl = 'http://localhost/api/lead';
  
  const body = req.body;

  if (req.method === 'POST') {

    // res.status(400).json(body);
    // return

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        header
      },
      body: JSON.stringify(body),
    })
    
  } else {
    // Envie uma resposta de erro
    res.status(405).json({ message: 'Método não permitido' });
  }

}