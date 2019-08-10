export default function setChain(chain){
   if (chain.evolves_to.length){
     const partialChain = setChain(chain.evolves_to[0]);
     return [...partialChain, { ...chain.species }]
   }else{
     return [{ ...chain.species }]
   }
}