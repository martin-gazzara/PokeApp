export default function setTypes(typesArray){
  const nameTypes = typesArray.map( item => item.type.name );
  let types;
  switch(nameTypes.length){
    case 0:
      types = 'none';
      break;
    case 1:
      types = nameTypes[0];
      break;
    default:
      types = nameTypes.join('/');
  }
  return types;
} 