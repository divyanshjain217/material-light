// todo: probar con template forms
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require("@angular/forms");
var PageSelectfield = (function () {
    function PageSelectfield() {
        this.minLength = 4;
        this.selectfield1 = new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(this.minLength)]);
        this.selectForm = new forms_1.FormGroup({
            selectfield1: this.selectfield1
        });
    }
    PageSelectfield.prototype.onSubmit = function () {
        console.log('submit', this.selectForm.value);
    };
    PageSelectfield = __decorate([
        core_1.Component({
            template: "\n\n<style>\n  .validationError{color: red;padding-bottom: 20px;}\n</style>\n\n<h5>Select Field</h5>\n<span>Reactive Forms only</span>\n<form [formGroup]=\"selectForm\" (ngSubmit)=\"onSubmit()\" autocomplete=\"off\">\n  <ml-selectfield [formControl]=\"selectfield1\">\n    <ml-sf-item>one</ml-sf-item>\n    <ml-sf-item>two</ml-sf-item>\n    <ml-sf-item>three</ml-sf-item>\n    <ml-sf-item></ml-sf-item>\n    <ml-sf-item>four</ml-sf-item>\n    <ml-sf-item>five</ml-sf-item>\n    <ml-sf-item>six</ml-sf-item>\n    <ml-sf-item>seven</ml-sf-item>\n    <ml-sf-item>eight</ml-sf-item>\n  </ml-selectfield>\n  <ml-error [validateControl]=\"selectfield1\" validator=\"required\" class=\"validationError\">\n    Required field\n  </ml-error>\n  <ml-error [validateControl]=\"selectfield1\" validator=\"minLength\" class=\"validationError\">\n    Min length: {{ minLength }}\n  </ml-error>  \n  <br>\n  <ml-button-submit [disabled]=\"selectForm.invalid\" value=\"Submit to console\" aspect=\"raised\"></ml-button-submit>\n</form>\n<br>\n<div><debug-form [name]=\"selectForm\"></debug-form></div>\n\n" //template
        }), 
        __metadata('design:paramtypes', [])
    ], PageSelectfield);
    return PageSelectfield;
}());
exports.PageSelectfield = PageSelectfield;
//# sourceMappingURL=page-selectfield.js.map