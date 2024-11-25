const API_URL = 'http://localhost:5000/lists';  

export const createList = async (list) => {
  try {

    const lists = await getList();
    const lastId = lists.length > 0 ? Math.max(...lists.map(list => list.id)) : 0;

    const newList = {
      id: lastId + 1,
      nome: list.listName,
      itens: list.items,
    };

      const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newList),
    });

    if(!response.ok){
      throw new Error (`Erro na requisição: ${response.statusText}`)
    }

    const contentType = response.headers.get('Content-Type');
    console.log('Tipo de conteúdo:', contentType);
    
    if(contentType && contentType.includes('application/json')){
      const data = await response.json();
      return data; 
    }else {
      console.error('A resposta não é JSON');
      throw new Error('Resposta inesperada da API');
    }
  } catch (error) {
    console.error("Erro ao adicionar lista:", error);
    alert("Erro ao adicionar lista");
  }
};

export const getLists = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar as listas:", error);
    return [];
  }
};


export const getList = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  const data = await response.json();
  return data;
};



export const updateList = async (id, list) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(list),
  });
  return response.json();
};


export const deleteList = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  return response.json();
};