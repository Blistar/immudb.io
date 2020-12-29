(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{441:function(e,t,s){"use strict";s.r(t);var a=s(10),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"consistency-checker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#consistency-checker"}},[e._v("#")]),e._v(" Consistency checker")]),e._v(" "),s("h2",{attrs:{id:"how-do-you-run-it"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-do-you-run-it"}},[e._v("#")]),e._v(" How do you run it?")]),e._v(" "),s("p",[e._v("It is part of immudb, enabled by default and runs as a thread of immudb.\nThe routine can be disabled as follows:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("./immudb --consistency-check"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("false\n")])])]),s("h2",{attrs:{id:"what-does-it-check"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-does-it-check"}},[e._v("#")]),e._v(" What does it check?")]),e._v(" "),s("p",[e._v("Consistency checker runs in a loop and continuously checks if the elements stored inside the immudb Merkle-tree are also physically stored correctly on the disk (the digest of the disk elements is the same digest stored in the related Merkle-tree leaf)")]),e._v(" "),s("h2",{attrs:{id:"how-does-it-run-its-check"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-does-it-run-its-check"}},[e._v("#")]),e._v(" How does it run its check?")]),e._v(" "),s("h3",{attrs:{id:"steps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#steps"}},[e._v("#")]),e._v(" Steps:")]),e._v(" "),s("ol",[s("li",[e._v("reading the last root and last index stored in immudb")]),e._v(" "),s("li",[e._v("generate a range between 0 and the length of the Merkle-tree level 0 (total number of elements stored)")]),e._v(" "),s("li",[e._v("shuffles the range to get a random scan list (to be unpredictable)")]),e._v(" "),s("li",[e._v("check if every element is correctly inserted in the Merkle-tree and if the Merkle-tree leaves correctly represent the elements stored on hard disk")]),e._v(" "),s("li",[e._v("after completing the loop, the process sleeps ten seconds and restarts from scratch with a new root and index")]),e._v(" "),s("li",[e._v("in case an element does not pass the check correctly, immudb is immediately stopped and prints out a log message")])]),e._v(" "),s("p",[e._v("In order to produce a corrupted entry that is only on disk and not in the Merkle-tree, stop the immudb process and use the "),s("a",{attrs:{href:"https://github.com/codenotary/immudb/blob/master/tools/nimmu/nimmu.go",target:"_blank",rel:"noopener noreferrer"}},[e._v("nimmu"),s("OutboundLink")],1),e._v(" command:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("go build tools/nimmu/nimmu.go\n./nimmu rawset key1 tamper\n")])])]),s("p",[e._v("Then restart immudb and should see the consistency check printing an error.")])])}),[],!1,null,null,null);t.default=r.exports}}]);