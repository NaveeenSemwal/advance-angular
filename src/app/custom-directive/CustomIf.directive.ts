import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";


@Directive({ selector: '[customIf]' })
export class CustomIfDirective {

    @Input() set customIf(val: boolean) {

        if (val) {
            this.vcRef.createEmbeddedView(this.templateRef);
        } else {
            this.vcRef.clear();
        }
    }
    constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {

    }

}
