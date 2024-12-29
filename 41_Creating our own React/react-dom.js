 export function render(reactElement,rootElement){
    function CreateDOMElement(reactElement){
        if (!reactElement) return;
        if(typeof reactElement.type === 'function'){
            return CreateDOMElement(reactElement.type(reactElement.props))
        }

        if(Array.isArray(reactElement)){
           return reactElement.map((el)=>CreateDOMElement(el));
        }
        if(typeof(reactElement)=="string"){
            return document.createTextNode(reactElement)
        }

       const {type,props}=reactElement;

       const DOMElement=document.createElement(type)
    if(props){
       Object.entries(props).forEach(([key,value])=>{
                DOMElement[key]=value;
       }) 
    
          
       props.children?.forEach((child)=>{
            if(Array.isArray(child)){
                DOMElement.append(...child.map((el)=> CreateDOMElement(el)))
            }
           else if(typeof(child?.type) === 'string'){
               DOMElement.append(CreateDOMElement(child));
        }else{
               const textNode=document.createTextNode(child);
               DOMElement.append(textNode);
           }
       })
    }
       return DOMElement;
    }
    const DOMElement=CreateDOMElement(reactElement);
    if(Array.isArray(DOMElement)){
        rootElement.append(...DOMElement);
    }else{
        rootElement.append(DOMElement);
    }
    
}
export default{
    render,
}