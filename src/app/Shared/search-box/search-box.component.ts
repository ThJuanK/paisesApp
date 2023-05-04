import { Component, EventEmitter, Input, OnInit, Output, OnDestroy } from '@angular/core';
import { Subject, Subscription, debounceTime} from 'rxjs'

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit, OnDestroy {

  constructor() { }

  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSuscription?: Subscription;

  ngOnInit(): void {
    this.debouncerSuscription = this.debouncer
      .pipe(
        debounceTime(600)
      )
      .subscribe(value =>{
        this.onDebounce.emit(value);
    })
  }

  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe();
  }

  @Input()
  placeholder: string = ""

  @Input()
  _initialValue: string = ""

  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();

  emiter(term : string){
    this.onValue.emit(term)
  }

  onKeyPress (term: string){
    this.debouncer.next(term)
  }

}
