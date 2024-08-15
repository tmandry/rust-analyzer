(function() {var type_impls = {
"hir_ty":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-ConstrainedSubst%3CI%3E\" class=\"impl\"><a href=\"#impl-Clone-for-ConstrainedSubst%3CI%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for ConstrainedSubst&lt;I&gt;<div class=\"where\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + Interner,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.80.1/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; ConstrainedSubst&lt;I&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.80.1/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.80.1/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.80.1/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.1/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.80.1/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","hir_ty::ConstrainedSubst"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-ConstrainedSubst%3CI%3E\" class=\"impl\"><a href=\"#impl-Debug-for-ConstrainedSubst%3CI%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for ConstrainedSubst&lt;I&gt;<div class=\"where\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + Interner,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.80.1/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.80.1/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.80.1/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.1/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.80.1/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.80.1/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","hir_ty::ConstrainedSubst"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Display-for-ConstrainedSubst%3CI%3E\" class=\"impl\"><a href=\"#impl-Display-for-ConstrainedSubst%3CI%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for ConstrainedSubst&lt;I&gt;<div class=\"where\">where\n    I: Interner,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.80.1/core/fmt/trait.Display.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.80.1/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.80.1/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.1/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.80.1/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.80.1/core/fmt/trait.Display.html#tymethod.fmt\">Read more</a></div></details></div></details>","Display","hir_ty::ConstrainedSubst"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-HasInterner-for-ConstrainedSubst%3CI%3E\" class=\"impl\"><a href=\"#impl-HasInterner-for-ConstrainedSubst%3CI%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I&gt; HasInterner for ConstrainedSubst&lt;I&gt;<div class=\"where\">where\n    I: Interner,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Interner\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Interner\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Interner</a> = I</h4></section></summary><div class='docblock'>The interner associated with the type.</div></details></div></details>","HasInterner","hir_ty::ConstrainedSubst"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Hash-for-ConstrainedSubst%3CI%3E\" class=\"impl\"><a href=\"#impl-Hash-for-ConstrainedSubst%3CI%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for ConstrainedSubst&lt;I&gt;<div class=\"where\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + Interner,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash\" class=\"method trait-impl\"><a href=\"#method.hash\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.80.1/core/hash/trait.Hash.html#tymethod.hash\" class=\"fn\">hash</a>&lt;__H&gt;(&amp;self, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.1/std/primitive.reference.html\">&amp;mut __H</a>)<div class=\"where\">where\n    __H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,</div></h4></section></summary><div class='docblock'>Feeds this value into the given <a href=\"https://doc.rust-lang.org/1.80.1/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/1.80.1/core/hash/trait.Hash.html#tymethod.hash\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash_slice\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.3.0\">1.3.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.80.1/src/core/hash/mod.rs.html#238-240\">source</a></span><a href=\"#method.hash_slice\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.80.1/core/hash/trait.Hash.html#method.hash_slice\" class=\"fn\">hash_slice</a>&lt;H&gt;(data: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.1/std/primitive.slice.html\">[Self]</a>, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.1/std/primitive.reference.html\">&amp;mut H</a>)<div class=\"where\">where\n    H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Feeds a slice of this type into the given <a href=\"https://doc.rust-lang.org/1.80.1/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/1.80.1/core/hash/trait.Hash.html#method.hash_slice\">Read more</a></div></details></div></details>","Hash","hir_ty::ConstrainedSubst"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-ConstrainedSubst%3CI%3E\" class=\"impl\"><a href=\"#impl-PartialEq-for-ConstrainedSubst%3CI%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for ConstrainedSubst&lt;I&gt;<div class=\"where\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + Interner,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.80.1/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;ConstrainedSubst&lt;I&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.1/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.80.1/src/core/cmp.rs.html#263\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.80.1/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.1/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.1/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","hir_ty::ConstrainedSubst"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TypeFoldable%3CI%3E-for-ConstrainedSubst%3CI%3E\" class=\"impl\"><a href=\"#impl-TypeFoldable%3CI%3E-for-ConstrainedSubst%3CI%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I&gt; TypeFoldable&lt;I&gt; for ConstrainedSubst&lt;I&gt;<div class=\"where\">where\n    I: Interner,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_fold_with\" class=\"method trait-impl\"><a href=\"#method.try_fold_with\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">try_fold_with</a>&lt;E&gt;(\n    self,\n    folder: &amp;mut dyn FallibleTypeFolder&lt;I, Error = E&gt;,\n    outer_binder: <a class=\"struct\" href=\"hir_ty/struct.DebruijnIndex.html\" title=\"struct hir_ty::DebruijnIndex\">DebruijnIndex</a>,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.80.1/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;ConstrainedSubst&lt;I&gt;, E&gt;</h4></section></summary><div class='docblock'>Apply the given folder <code>folder</code> to <code>self</code>; <code>binders</code> is the\nnumber of binders that are in scope when beginning the\nfolder. Typically <code>binders</code> starts as 0, but is adjusted when\nwe encounter <code>Binders&lt;T&gt;</code> in the IR or other similar\nconstructs.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.fold_with\" class=\"method trait-impl\"><a href=\"#method.fold_with\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">fold_with</a>(\n    self,\n    folder: &amp;mut dyn TypeFolder&lt;I, Error = <a class=\"enum\" href=\"https://doc.rust-lang.org/1.80.1/core/convert/enum.Infallible.html\" title=\"enum core::convert::Infallible\">Infallible</a>&gt;,\n    outer_binder: <a class=\"struct\" href=\"hir_ty/struct.DebruijnIndex.html\" title=\"struct hir_ty::DebruijnIndex\">DebruijnIndex</a>,\n) -&gt; Self</h4></section></summary><div class='docblock'>A convenient alternative to <code>try_fold_with</code> for use with infallible\nfolders. Do not override this method, to ensure coherence with\n<code>try_fold_with</code>.</div></details></div></details>","TypeFoldable<I>","hir_ty::ConstrainedSubst"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TypeVisitable%3CI%3E-for-ConstrainedSubst%3CI%3E\" class=\"impl\"><a href=\"#impl-TypeVisitable%3CI%3E-for-ConstrainedSubst%3CI%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I&gt; <a class=\"trait\" href=\"hir_ty/trait.TypeVisitable.html\" title=\"trait hir_ty::TypeVisitable\">TypeVisitable</a>&lt;I&gt; for ConstrainedSubst&lt;I&gt;<div class=\"where\">where\n    I: Interner,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.visit_with\" class=\"method trait-impl\"><a href=\"#method.visit_with\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hir_ty/trait.TypeVisitable.html#tymethod.visit_with\" class=\"fn\">visit_with</a>&lt;B&gt;(\n    &amp;self,\n    visitor: &amp;mut dyn <a class=\"trait\" href=\"hir_ty/trait.TypeVisitor.html\" title=\"trait hir_ty::TypeVisitor\">TypeVisitor</a>&lt;I, BreakTy = B&gt;,\n    outer_binder: <a class=\"struct\" href=\"hir_ty/struct.DebruijnIndex.html\" title=\"struct hir_ty::DebruijnIndex\">DebruijnIndex</a>,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.80.1/core/ops/control_flow/enum.ControlFlow.html\" title=\"enum core::ops::control_flow::ControlFlow\">ControlFlow</a>&lt;B&gt;</h4></section></summary><div class='docblock'>Apply the given visitor <code>visitor</code> to <code>self</code>; <code>binders</code> is the\nnumber of binders that are in scope when beginning the\nvisitor. Typically <code>binders</code> starts as 0, but is adjusted when\nwe encounter <code>Binders&lt;T&gt;</code> in the IR or other similar\nconstructs.</div></details></div></details>","TypeVisitable<I>","hir_ty::ConstrainedSubst"],["<section id=\"impl-Eq-for-ConstrainedSubst%3CI%3E\" class=\"impl\"><a href=\"#impl-Eq-for-ConstrainedSubst%3CI%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for ConstrainedSubst&lt;I&gt;<div class=\"where\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + Interner,</div></h3></section>","Eq","hir_ty::ConstrainedSubst"],["<section id=\"impl-StructuralPartialEq-for-ConstrainedSubst%3CI%3E\" class=\"impl\"><a href=\"#impl-StructuralPartialEq-for-ConstrainedSubst%3CI%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for ConstrainedSubst&lt;I&gt;<div class=\"where\">where\n    I: Interner,</div></h3></section>","StructuralPartialEq","hir_ty::ConstrainedSubst"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()