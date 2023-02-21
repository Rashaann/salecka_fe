//FUNCTION THAT REMOVES ACCENTS AND/OR DIACRITICS IN A GIVEN STRING
export const textToCleanNameUrl = (str) => {
    return str.toLowerCase()
              .replaceAll(' ', '-')
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
  }