import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  // Use the name `placeholder` for the @Input.
  // Use the name `search` for the @Output.

  @Input()
  placeholder:string='Input Text'

  search:string=''

  @Output() searchString: EventEmitter<string> = new EventEmitter();

  onSearch():void{
    this.searchString.emit(this.search);
  }


}

