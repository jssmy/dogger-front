import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: SearchComponent
    }
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements ControlValueAccessor{
  @Input() placeHolder = 'Typing...';
  @Input() styled: 'ligth' | 'normal' = 'normal';
  @Input() value: string = '';

  @Output() onSearch = new EventEmitter<string>();

  onChange = (value: string) => this.value = value;

  onTouched = () => {};

  touched = false;

  disabled = false;

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(obj: any): void {
    this.touched = true;
    this.onTouched();
    this.value = obj;
  }

  onSearchEvent() {
    this.touched = true;
    this.onTouched();
    this.onSearch.emit(this.value);
  }

  onChangedValue(value: string) {
    
    this.onChange(value);
    this.touched = true;
    this.onTouched();
  }
}
