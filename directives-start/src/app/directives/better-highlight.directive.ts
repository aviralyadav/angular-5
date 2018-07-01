import { OnInit, Directive, Renderer2, ElementRef, HostListener, HostBinding, Input } from "@angular/core";

@Directive({
    selector: '[appBetterHighlightDirective]'
})

export class BetterHighlightDirective implements OnInit {
    @Input() defaultColor: string = 'yellow';
    @Input() highlightColor: string = 'blue';
    @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;
    constructor(private renderer: Renderer2, private elmRef: ElementRef){}
    
    
    @HostListener('mouseenter') mouseover(event: Event){
        // this.renderer.setStyle(this.elmRef.nativeElement, 'background-color' ,'blue');
        this.backgroundColor = this.highlightColor;
    }

    @HostListener('mouseleave') mouseleave(event: Event){
        // this.renderer.setStyle(this.elmRef.nativeElement, 'background-color' ,'transparent');
        this.backgroundColor = this.defaultColor;
    }

    ngOnInit(){
        this.backgroundColor = this.defaultColor;
        // this.renderer.setStyle(this.elmRef.nativeElement, 'background-color' ,'blue');
    }
}