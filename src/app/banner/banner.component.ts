import { Component, HostBinding, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
//@ts-ignore
import Typewriter from 't-writer.js';
import * as AOS from 'aos';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor(private breakPointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    AOS.init();
    const target = document.querySelector('.tw')
    const writer = new Typewriter(target, {
      typeSpeed: 100,
      loop: false,
      typeColor: '#282E82'
    })
    
    writer
      .type("Hello World!")
      .rest(500)
      .changeOps({ deleteSpeed: 80 })
      .remove(12)
      .type("I'm Yojit Shinde.")
      .start()
  }

}