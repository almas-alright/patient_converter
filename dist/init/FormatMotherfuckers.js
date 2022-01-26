"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormatMotherfuckers = void 0;
const patients_1 = __importDefault(require("../data/patients"));
const objects_to_csv_1 = __importDefault(require("objects-to-csv"));
class FormatMotherfuckers {
    constructor() {
        this.makeCSV();
    }
    async makeCSV() {
        const patients = await this.duplicateMotherfucker();
        const csv = new objects_to_csv_1.default(patients);
        const file = await csv.toDisk(__dirname + '/patient_data_8.csv');
    }
    async duplicateMotherfucker() {
        const patients = [];
        await patients_1.default.forEach(element => {
            patients.push({
                name: element.name,
                name_furigana: this.nameFurigana(element.fn, element.ln),
                profile_picture: 'http://dummyimage.com/100x100.png/5fa2dd/ffffff',
                date_of_birth: this.formatDoB(element.date_of_birth),
                gender: this.formatGender(element.gender),
                blood_type: this.fuckingBlood('A+'),
                mobile_no: this.formatMobileNumber(element.mobile_no),
                cell_phone_no: null,
                email: element.email,
                post_code: element.post_code,
                address: element.address,
                address_furigana: element.address,
                is_sub_account: null,
                parentAccountId: null,
                special_conditions: null,
                medicalId: null,
                riskStatus: null,
            });
        });
        return patients;
    }
    formatMobileNumber(mobile_no) {
        return mobile_no ? mobile_no : '965127771';
    }
    nameFurigana(fn, ln) {
        return fn + " " + ln;
    }
    formatDoB(dob) {
        let onlyDate = dob.replace(/ *\([^)]*\) */g, "");
        onlyDate = onlyDate.replace(/\//g, '-');
        return onlyDate ? onlyDate : '1950-01-01';
    }
    formatGender(gender) {
        return gender ? gender : 'other';
    }
    fuckingBlood(blood) {
        return blood ? blood : 'A+';
    }
}
exports.FormatMotherfuckers = FormatMotherfuckers;
// {
//     'name': '亜矢子', 
//     'fn': 'あいうち', 
//     'ln': 'あやこ', 
//     'password': '', 
//     'post_code': '', 
//     'address': '', 
//     'mobile_no': '', 
//     'email': '', 
//     'date_of_birth': '', 
//     'gender': ''
// }
