const API_URL_CATEGORIES = 'http://localhost:5000/categorias';

export const getCategories = async () => {
  try {
    const response = await fetch(API_URL_CATEGORIES);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar categorias:', error);
    return [];
  }
};