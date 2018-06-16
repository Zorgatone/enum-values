"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enumValues_1 = require("./enumValues");
var chai_1 = require("chai");
describe('EnumValues', function () {
    describe('numeric values', function () {
        var NumericValuesTestEnum;
        (function (NumericValuesTestEnum) {
            NumericValuesTestEnum[NumericValuesTestEnum["A"] = 0] = "A";
            NumericValuesTestEnum[NumericValuesTestEnum["B"] = 1] = "B";
            NumericValuesTestEnum[NumericValuesTestEnum["C"] = 2] = "C";
            NumericValuesTestEnum[NumericValuesTestEnum["c"] = 2] = "c";
            NumericValuesTestEnum[NumericValuesTestEnum["D"] = 3] = "D";
            NumericValuesTestEnum[NumericValuesTestEnum["K"] = 10] = "K";
        })(NumericValuesTestEnum || (NumericValuesTestEnum = {}));
        it('getNames should return correct values', function () {
            chai_1.expect(enumValues_1.EnumValues.getNames(NumericValuesTestEnum)).to.deep.equal(['A', 'B', 'C', 'c', 'D', 'K']);
        });
        it('getValues should return correct values', function () {
            chai_1.expect(enumValues_1.EnumValues.getValues(NumericValuesTestEnum)).to.deep.equal([0, 1, 2, 2, 3, 10]);
        });
        it('getNameFromValue should return the name for that value', function () {
            var expectedResult = "B";
            chai_1.expect(enumValues_1.EnumValues.getNameFromValue(NumericValuesTestEnum, 1)).equal(expectedResult);
        });
        it('getNameFromValue should return null with duplicate value', function () {
            chai_1.expect(enumValues_1.EnumValues.getNameFromValue(NumericValuesTestEnum, 2)).to.be.null;
        });
        it('getNameFromValue should return null when not found', function () {
            chai_1.expect(enumValues_1.EnumValues.getNameFromValue(NumericValuesTestEnum, 11)).to.be.null;
        });
        it('getNamesAndValues should return correct values', function () {
            var expectedResult = [
                { name: 'A', value: 0 },
                { name: 'B', value: 1 },
                { name: 'C', value: 2 },
                { name: 'c', value: 2 },
                { name: 'D', value: 3 },
                { name: 'K', value: 10 }
            ];
            chai_1.expect(enumValues_1.EnumValues.getNamesAndValues(NumericValuesTestEnum)).to.deep.equal(expectedResult);
        });
    });
    describe('string values', function () {
        var StringValuesTestEnum;
        (function (StringValuesTestEnum) {
            StringValuesTestEnum["A"] = "AValue";
            StringValuesTestEnum["B"] = "BValue";
            StringValuesTestEnum["C"] = "CValue";
            StringValuesTestEnum["c"] = "CValue";
        })(StringValuesTestEnum || (StringValuesTestEnum = {}));
        it('getNames should return correct values', function () {
            chai_1.expect(enumValues_1.EnumValues.getNames(StringValuesTestEnum)).to.deep.equal(['A', 'B', 'C', 'c']);
        });
        it('getNameFromValue should return the name for that value', function () {
            var expectedResult = "B";
            chai_1.expect(enumValues_1.EnumValues.getNameFromValue(StringValuesTestEnum, 'BValue')).equal(expectedResult);
        });
        it('getNameFromValue should return null with duplicate value', function () {
            chai_1.expect(enumValues_1.EnumValues.getNameFromValue(StringValuesTestEnum, 'CValue')).to.be.null;
        });
        it('getNameFromValue should return null when not found', function () {
            chai_1.expect(enumValues_1.EnumValues.getNameFromValue(StringValuesTestEnum, 'BadValue')).to.be.null;
        });
        it('getValues should return correct values', function () {
            chai_1.expect(enumValues_1.EnumValues.getValues(StringValuesTestEnum)).to.deep.equal(['AValue', 'BValue', 'CValue', 'CValue']);
        });
        it('getNamesAndValues should return correct values', function () {
            var expectedResult = [
                { name: 'A', value: 'AValue' },
                { name: 'B', value: 'BValue' },
                { name: 'C', value: 'CValue' },
                { name: 'c', value: 'CValue' }
            ];
            chai_1.expect(enumValues_1.EnumValues.getNamesAndValues(StringValuesTestEnum)).to.deep.equal(expectedResult);
        });
    });
    describe('mixed values', function () {
        var MixedEnum;
        (function (MixedEnum) {
            MixedEnum["A"] = "first";
            MixedEnum[MixedEnum["B"] = 2] = "B";
            MixedEnum["c"] = "third";
            MixedEnum[MixedEnum["@"] = 2] = "@";
        })(MixedEnum || (MixedEnum = {}));
        it('getNames should return correct values', function () {
            chai_1.expect(enumValues_1.EnumValues.getNames(MixedEnum)).to.deep.equal(['A', 'B', 'c', '@']);
        });
        it('getValues should return correct values', function () {
            chai_1.expect(enumValues_1.EnumValues.getValues(MixedEnum)).to.deep.equal(['first', 2, 'third', 2]);
        });
        it('getNamesAndValues should return correct values', function () {
            var expectedResult = [
                { name: 'A', value: 'first' },
                { name: 'B', value: 2 },
                { name: 'c', value: 'third' },
                { name: '@', value: 2 }
            ];
            chai_1.expect(enumValues_1.EnumValues.getNamesAndValues(MixedEnum)).to.deep.equal(expectedResult);
        });
    });
});
