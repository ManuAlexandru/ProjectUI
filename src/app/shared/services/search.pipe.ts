import { Pipe, PipeTransform } from '@angular/core';
import { ProductResponseModel } from '../models/productResponseModel';

@Pipe({
  name: 'filterProduct'
})
export class SearchPipe implements PipeTransform {

  public transform(productLst:ProductResponseModel[],filterText:string) {
 if(productLst.length===0 || filterText==="")
return productLst;
else
{
  return  productLst.filter((product)=>{
        return product.title.toLowerCase().includes(filterText);
    }
  
    );
}
}

}