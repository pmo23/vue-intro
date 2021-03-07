var app = new Vue({
    el: '#app',
    data: {
        currentTab: 1,
        rating: 3,
        comment: '',
        error: '',
        submitted: false,
        previewUrl: ''
    },
    methods: {
        toggle: function (tab) {
            this.currentTab = tab
        },
        onSubmit: function () {
            // 実際はここでWeb APIを叩いて
            // フォームの内容をサーバに送信するはず

            // dataの内容はthisからアクセスできる
            this.error = ''
            if (this.comment === '') {
                this.error = 'コメントは必須です。'
                return false
            }

            // フォームの内容を表示
            this.submitted = true
        },
        clearForm: function () {
            this.submitted = false
            this.rating = 3
            this.comment = ''
        },
        onFileChange: function (event) {
            const file = event.target.files[0]
            if (!file) {
                return false
            }
            if (!file.type.match('image.*')) {
                return false
            }
            const reader = new FileReader()
            const that = this
            reader.onload = function (e) {
                that.previewUrl = e.target.result
            }
            reader.readAsDataURL(file)
        }
    }
})