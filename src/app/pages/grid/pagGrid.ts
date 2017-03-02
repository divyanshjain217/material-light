import {Component} from '@angular/core';

@Component({
template: `

<style>
.bg-blue{
  background: cornflowerblue;
}  
.bg-grey{
  background: gainsboro;
}  
.bg-yellow{
  background: yellow;
}  
.bg-red{
  background: red;
}
</style>

<h6>Grid</h6>

<ml-grid>
  <ml-grid-cell width="1" class="bg-grey">1 cols</ml-grid-cell>
  <ml-grid-cell width="1" class="bg-grey">1 cols</ml-grid-cell>
  <br>
  <ml-grid-cell width="12" class="bg-grey">Full width</ml-grid-cell>
  <ml-grid-cell width="12" class="bg-grey">Full width</ml-grid-cell>
</ml-grid>
        
`//template
})
export class PagGrid {}