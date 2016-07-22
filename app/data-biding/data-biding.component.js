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
var DataBidingComponent = (function () {
    function DataBidingComponent() {
        this.url = 'http://loiane.com';
        this.urlImg = 'http://lorempixel.com/400/200/food/';
        this.conteudoAtual = '';
        this.conteudoSalvo = '';
        this.isMouseOver = false;
        this.nome = '';
        this.cor = '';
    }
    DataBidingComponent.prototype.onClick = function () {
        alert('Olár!');
    };
    DataBidingComponent.prototype.onKeyup = function (event) {
        console.log(event.target.value);
        this.conteudoAtual = event.target.value;
    };
    DataBidingComponent.prototype.onSave = function (value) {
        this.conteudoSalvo = value;
    };
    DataBidingComponent.prototype.onMouseSpan = function () {
        this.isMouseOver = !this.isMouseOver;
    };
    DataBidingComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'exemplo-data-biding',
            templateUrl: 'data-biding.component.html',
            /* styles: [
              `
                .highlight{
                  background-color: yellow;
                  font-weight: bold;
                }
              `
            ] */
            styleUrls: ['data-biding.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], DataBidingComponent);
    return DataBidingComponent;
}());
exports.DataBidingComponent = DataBidingComponent;
//# sourceMappingURL=data-biding.component.js.map