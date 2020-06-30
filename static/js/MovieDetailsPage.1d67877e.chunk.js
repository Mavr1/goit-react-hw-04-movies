(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[2],{78:function(e,t,a){"use strict";a.r(t);var n=a(18),r=a(19),l=a(21),o=a(20),c=a(0),i=a.n(c),s=a(1),m=a(11),u=a(12),v=function(e){var t=e.poster,a=e.title,n=e.releaseDate,r=e.vote,l=e.overview,o=e.genres;return i.a.createElement("div",{className:"movieAbout"},i.a.createElement("img",{className:"moviePoster",src:"https://image.tmdb.org/t/p/w500/".concat(t),alt:"movie poster",width:250}),i.a.createElement("div",{className:"movieDiscription"},i.a.createElement("h2",null,a),i.a.createElement("p",null,"Release date: ",n),i.a.createElement("p",null,"User score: ",r),i.a.createElement("h3",null,"Overview"),i.a.createElement("p",null,l),i.a.createElement("h4",null,"Genres"),i.a.createElement("p",null,Object(u.c)(o))))},p=a(7),h=function(e){var t=e.url;return i.a.createElement("ul",{className:"additionalInfo-menu"},i.a.createElement("li",{className:"additionalInfo-menuItem"},i.a.createElement(p.b,{to:"".concat(t,"/cast")},"Cast")),i.a.createElement("li",{className:"additionalInfo-menuItem"},i.a.createElement(p.b,{to:"".concat(t,"/reviews")},"Reviews")))},d=Object(c.lazy)((function(){return a.e(0).then(a.bind(null,79))})),E=Object(c.lazy)((function(){return a.e(3).then(a.bind(null,80))})),f=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={movie:{}},e.onGoBack=function(){if(e.props.location.state){var t=e.props.location.state,a=t.from,n=t.fromSearch;e.props.history.push(a+n)}else e.props.history.push("/")},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;Object(m.b)(t).then((function(t){return e.setState({movie:t.data})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.state.movie,t=e.title,a=e.vote_average,n=e.overview,r=e.genres,l=e.poster_path,o=e.release_date;return i.a.createElement(i.a.Fragment,null,this.state.movie.title&&i.a.createElement("div",{className:"movieDetails"},i.a.createElement("button",{onClick:this.onGoBack},"Go back"),i.a.createElement(v,{poster:l,title:t,releaseDate:o,vote:a,overview:n,genres:r}),i.a.createElement("div",{className:"additionalInfo"},i.a.createElement("h4",null,"Additional Information"),i.a.createElement(h,{url:this.props.match.url}),i.a.createElement(c.Suspense,{fallback:i.a.createElement("p",null,"Loading...")},i.a.createElement(s.d,null,i.a.createElement(s.b,{path:"/movies/:id/cast",component:d}),i.a.createElement(s.b,{path:"/movies/:id/reviews",component:E}))))))}}]),a}(c.Component);t.default=f}}]);
//# sourceMappingURL=MovieDetailsPage.1d67877e.chunk.js.map