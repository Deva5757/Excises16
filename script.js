var customer={
    name:'Tom',
    Phone_number:7708478445,
    email:'tom6557q@gmail.com',
    address:'No:12 White Town Pondicherry',
    orders:false,
    prime_customer:true,
    Discount_items:{
            Samsung:'40% Discount',
            LG:'20% Discount',
            MI:'30% Discount',
            Realme:'10% Discount',
            Iphone:'10% Discount',
            OnePlus:'20% Discount',
        },
        prime_Discount:function(){
            if(this.prime_customer==true){
                console.table(this.Discount_items)
            }
        }

}
var Employ={
    name:'Jerry',
    Phone_number:9786734602,
    email:'jerry123@gmail.com',
    Company_address:'No:12 SST Info Soluction Pondicherry',
    salary_details:{
        work_salary:6200,
        EPF_salary:800,
        Allowance:1000,
        Total_salary:8000
    },
    display:function(){
            console.table(this.salary_details)
    }
}
Employ.display();

if(customer.orders=true){
    console.table(Employ)
}
customer.prime_Discount()