(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{363:function(e,t,s){"use strict";s.r(t);var r=s(43),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"consistency-checker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#consistency-checker"}},[e._v("#")]),e._v(" Consistency checker")]),e._v(" "),s("h2",{attrs:{id:"how-you-run-it"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-you-run-it"}},[e._v("#")]),e._v(" How you run it?")]),e._v(" "),s("p",[e._v("It’s built as part of immudb and is enabled by default. It runs as a thread within immudb.\nIt's possible disable the routine with following options:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("./immudb --consistency-check=false\n")])])]),s("h2",{attrs:{id:"what-does-it-check"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-does-it-check"}},[e._v("#")]),e._v(" What does it check?")]),e._v(" "),s("p",[e._v("Consistency checker runs a loop in which it continuously checks if the elements stored inside immudb merkle tree are physically stored correctly on the disk (the digest of the disk element's is the same digest stored in the related merkle tree leaf)")]),e._v(" "),s("h2",{attrs:{id:"how-does-it-run-its-check"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-does-it-run-its-check"}},[e._v("#")]),e._v(" How does it run its check?")]),e._v(" "),s("h3",{attrs:{id:"steps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#steps"}},[e._v("#")]),e._v(" Steps:")]),e._v(" "),s("ul",[s("li",[e._v("It starts taking last root and last index stored in immudb.")]),e._v(" "),s("li",[e._v("It generates a range between 0 and the length of the merkle tree level 0(total number of elements stored)")]),e._v(" "),s("li",[e._v("In order to be unpredictable it shuffles the range to get a random scan list")]),e._v(" "),s("li",[e._v("It start to checks if every element is correctly inserted in the tree and if the merkle tree leaves correctly represents the elements stored on hard disk.")]),e._v(" "),s("li",[e._v("When it completes the loop it sleep ten seconds and restart from the beginning with a new root and index.")]),e._v(" "),s("li",[e._v("When it found an element that doesn’t pass correctly the corruption check it immediately stop immudb with a log a message.")])]),e._v(" "),s("p",[e._v("In order to reproduce a corruption and modify an entry only on disk and not in merkle tree stop immudb and use "),s("a",{attrs:{href:"https://github.com/codenotary/immudb/blob/master/tools/nimmu/nimmu.go",target:"_blank",rel:"noopener noreferrer"}},[e._v("nimmu"),s("OutboundLink")],1)]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("go build tools/nimmu/nimmu.go \n./nimmu rawset key1 tamper\n")])])]),s("p",[e._v("At the end restart immudb and should see the consistency check error.")])])}),[],!1,null,null,null);t.default=a.exports}}]);