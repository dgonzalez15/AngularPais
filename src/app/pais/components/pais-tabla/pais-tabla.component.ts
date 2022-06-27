import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styleUrls: ['./pais-tabla.component.scss']
})
export class PaisTablaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() paises: Country[] = [];

}
