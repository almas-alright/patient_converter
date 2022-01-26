import motherfuckers from "../data/patients";
import ObjectsToCsv from "objects-to-csv";

export class FormatMotherfuckers{
    constructor() {
        this.makeCSV()

    }

    private async makeCSV(){
        const patients = await this.duplicateMotherfucker()
        const csv = new ObjectsToCsv(patients)
        const file = await csv.toDisk(__dirname+'/patient_data_8.csv');
    }

    private async duplicateMotherfucker(){
        const patients:any = [];
        await motherfuckers.forEach(element => {
                patients.push({
                    name: element.name,
                    name_furigana: this.nameFurigana(element.fn, element.ln),
                    profile_picture: 'http://dummyimage.com/100x100.png/5fa2dd/ffffff',
                    date_of_birth: this.formatDoB(element.date_of_birth),
                    gender: this.formatGender(element.gender),
                    blood_type: this.fuckingBlood('na'),
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
                })
        });

        return patients;
    }

    private formatMobileNumber(mobile_no : any){
        return mobile_no ? mobile_no : 'na'
    }

    private nameFurigana(fn:string, ln:string){
        return fn+" "+ln
    }

    private formatDoB(dob:any){
        let onlyDate = dob.replace(/ *\([^)]*\) */g, "")
        onlyDate = onlyDate.replace(/\//g, '-')
        return onlyDate ? onlyDate : 'na';
    }

    private formatGender(gender:any){
        return gender ? gender : 'other'
    }

    private fuckingBlood(blood:any){
        return blood ? blood : 'na'
    }

}

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