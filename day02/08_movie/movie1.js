// 아래 데이터를 활용하세요.
    // 1. create되면 rateMach 테이블을 이용해 movies에 rate항목을 rate: [12, '12세이상 관람가'] 형태로 만든다.
    // 2. 평점(score) 순으로 데이터를 소팅한다.
    // 3. for 문을 돌면서 각 데이터를 넣어 랜더링 하도록 디렉티브 작업을 한다.
      
    Vue.createApp({
        data() {
            return {
                
                rateMach: {
                    '0': '전체관람가',
                    '12': '12세이상 관람가',
                    '15': '15세이상 관람가',
                    '19': '19세이상 관람가',
                    '20': '청소년관람불가'
                },
                movies: [
                    {
                    name: '남애의 여름밤',
                    src: 'images/mov_1.jpg',
                    rate: 15,
                    score: 9.43, //평점
                    sale: 11.7,  //판매율
                    openDate: 8.26,  //개봉일
                    ticketing: 11.79, //예매율
                    week: 8777, //주말관객
                    },
                    {
                    name: '시크릿 가든',
                    src: 'images/mov_2.jpg',
                    rate: 0,
                    score: 8.13,
                    sale: 7.7,  //판매율
                    openDate: 9.3,  //개봉일
                    ticketing: 20.66,
                    week: 2000
                    },
                    {
                    name: '반도',
                    src: 'images/mov_3.jpg',
                    rate: 15,
                    score: 8.54,
                    sale: 7.7,
                    openDate: 9.3,
                    ticketing: 9.79,
                    week: 23327
                    },
                    {
                    name: '강철비2',
                    src: 'images/mov_4.jpg',
                    rate: 19,
                    score: 7.43,
                    sale: 7.7,
                    openDate: 9.7,
                    ticketing: 8.6,
                    week: 23421
                    },
                    {
                    name: '신혼여행 허리케인',
                    src: 'images/mov_5.jpg',
                    rate: 12,
                    score: 6.2,
                    sale: 10.7,
                    openDate: 8.17,
                    ticketing: 2.11,
                    week: 3213
                    },
                    {
                    name: '테넷',
                    src: 'images/mov_6.jpg',
                    rate: 19,
                    score: 7.12,
                    sale: 9.11,
                    openDate: 11.17,
                    ticketing: 3.21,
                    week: 3213
                    },
                    {
                    name: '오케이 마담',
                    src: 'images/mov_7.jpg',
                    rate: 20,
                    score: 9.43,
                    sale: 9.11,
                    openDate: 9.1,
                    ticketing: 3.79,
                    week: 2277
                    },
                    {
                    name: '다만 악에서 구하소서',
                    src: 'images/mov_8.jpg',
                    rate: 20,
                    score: 8.9,
                    sale: 8.8,
                    openDate: 8.21,
                    ticketing: 12.79,
                    week: 83777
                    }
                ],
                state: 'reserve',
                order: {
                    reserve: 'on',
                    star: '',
                    open: '',
                    week: '',
                    sale: '',
                }
            }
        },
        computed: {
        },
        methods: {
            setContext(ord) {
                let order_key = Object.keys(this.order)

                for (let key of order_key) {
                    this.order[key] = ''

                    if(key === ord) {
                        this.order[ord] = 'on'
                        this.state=ord
                    }
                }
            }
        },
        watch: {

        },
        created() {
            for (let i = 0; i < this.movies.length; i++) {           
                let movie = this.movies[i]
                this.movies[i].rate = [movie.rate, this.rateMach[String(movie.rate)]]
            }
            this.movies = this.movies.sort((a, b) => b.score - a.score);
        },
    }).mount('.movie')
    //app.mount(".movie");