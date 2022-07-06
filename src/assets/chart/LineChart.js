import { Line } from "vue-chartjs/legacy";

export default {
    extends: Line,
    mounted() {
        this.renderChart({
            labels: [
                'January ',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'Desember'
            ],
            dataSets: [{
                label: 'Achivement',
                bgcolor: '#2ebfaf',
                data: [50, 11, 25, 40, 90, 78, 57]
            }]
        }, { responsive: true, maintaineAspectRatio: false })
    }
}