module.exports = {
    getTodaysDate: async function () {
        //Gets today's dd/mm/yyyy and returns it as an object
        const today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();

        const dateObj = {
            "day": parseInt(dd),
            "month": parseInt(mm),
            "year": parseInt(yyyy)
        }

        return dateObj;
    },
    splitDBDate: async function (str) {
        //Takes date string from API, splits it up and returns a new object
        const [year, month, extra] = str.split("-");
        const [day] = extra.split("T");

        const dateObj = {
            "day": parseInt(day),
            "month": parseInt(month),
            "year": parseInt(year)
        }

        return dateObj;
    },
    capitalize: async function (str) {
        return str
            .toLowerCase()
            .split(' ')
            .map(function (word) {
                return word[0].toUpperCase() + word.substr(1);
            })
            .join(' ');
    }
}