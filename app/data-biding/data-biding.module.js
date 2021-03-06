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
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var input_property_component_1 = require('./input-property.component');
var output_property_component_1 = require('./output-property.component');
var data_biding_component_1 = require('./data-biding.component');
var DataBidingModule = (function () {
    function DataBidingModule() {
    }
    DataBidingModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule],
            declarations: [input_property_component_1.InputPropertyComponent, output_property_component_1.OutputPropertyComponent, data_biding_component_1.DataBidingComponent],
            exports: [data_biding_component_1.DataBidingComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], DataBidingModule);
    return DataBidingModule;
}());
exports.DataBidingModule = DataBidingModule;
//# sourceMappingURL=data-biding.module.js.map