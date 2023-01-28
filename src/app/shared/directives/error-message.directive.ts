import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";
import { MessagesService } from "src/app/messages.service";

@Directive({
    selector: '[appErrorMessageDirective]'
})
export class ErrorMessageDirective implements OnInit {
    constructor(
        private messageService: MessagesService,
        private elementRef: ElementRef,
        private renderer: Renderer2
    ) { }
    ngOnInit(): void {
        this.messageService.errorMessageEmitter.subscribe(data => {
            this.renderer.removeClass(this.elementRef.nativeElement, 'hide');
            this.renderer.removeClass(this.elementRef.nativeElement, 'out-animate');
            this.renderer.addClass(this.elementRef.nativeElement, 'animate');
            setTimeout(()=> {
                this.renderer.removeClass(this.elementRef.nativeElement, 'animate')
                this.renderer.addClass(this.elementRef.nativeElement, 'out-animate');
            }, 3000)
            setTimeout(()=> {
                this.renderer.addClass(this.elementRef.nativeElement, 'hide');
            }, 4000)
        })
    }
}