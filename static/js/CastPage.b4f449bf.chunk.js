(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[0],{79:function(t,a,e){"use strict";e.r(a);var c=e(18),r=e(19),n=e(21),s=e(20),o=e(0),i=e.n(o),l=function(t){var a=t.name,e=t.character,c=t.profile;return i.a.createElement("li",{className:"cast-actorCard"},i.a.createElement("img",{className:"cast-actorPhoto",src:"https://image.tmdb.org/t/p/w500/".concat(c),alt:a,width:200}),i.a.createElement("h4",{className:"cast-actorName"},a),i.a.createElement("p",{className:"cast-actorChar"},"Character: ",e))},m=e(11),u=e(12),h=function(t){Object(n.a)(e,t);var a=Object(s.a)(e);function e(){var t;Object(c.a)(this,e);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(t=a.call.apply(a,[this].concat(n))).state={cast:null},t}return Object(r.a)(e,[{key:"componentDidMount",value:function(){var t=this,a=this.props.match.params.id;Object(m.c)(a).then((function(t){return Object(u.a)(t)})).then((function(a){return t.setState({cast:a})})).catch((function(t){return console.log(t)}))}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("ul",{className:"movieCast"},null!==this.state.cast&&this.state.cast.map((function(t){var a=t.character,e=t.name,c=t.profile_path,r=t.id;return i.a.createElement(l,{key:r,name:e,character:a,profile:c})}))))}}]),e}(o.Component);a.default=h}}]);
//# sourceMappingURL=CastPage.b4f449bf.chunk.js.map