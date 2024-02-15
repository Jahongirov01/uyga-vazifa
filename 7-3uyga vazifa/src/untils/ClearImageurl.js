export default (products) =>{
products.forEach(product =>{

    products.images = product.images.map(img =>{
        img = img.replaceAll("[", "")
        img = img.replaceAll("]", "") 
        img = img.replaceAll('""',"")
       
    });
});

    return img
}