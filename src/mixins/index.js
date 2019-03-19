export default{
    data(){
        return{

        }
    },
    methods: {
        speskGetTime(){
            let _date = new Date(),hour = _date.getHours(),minutes = _date.getMinutes();
            let checkedTime = (date) => {
                if(date < 10){
                    date = '0' + date
                }
                return date;
            }
            return `${_date.getFullYear()}-${_date.getMonth()+1}-${_date.getDate()} ${checkedTime(hour)}:${checkedTime(minutes)}`;
        }
    },
    computed: {
        innerH() {
            return (window.innerHeight - 80) + 'px';
        }
    },
}