(function() {var implementors = {};
implementors["ink_core"] = [{"text":"impl Extend&lt;bool&gt; for StorageBitvec","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Extend&lt;&amp;'a bool&gt; for StorageBitvec","synthetic":false,"types":[]},{"text":"impl&lt;K, V, H&gt; Extend&lt;(K, V)&gt; for StorageHashMap&lt;K, V, H&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Ord + Clone + PackedLayout,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: PackedLayout,<br>&nbsp;&nbsp;&nbsp;&nbsp;H: Hasher,<br>&nbsp;&nbsp;&nbsp;&nbsp;Key: From&lt;&lt;H as Hasher&gt;::Output&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T, N&gt; Extend&lt;T&gt; for SmallVec&lt;T, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: PackedLayout,<br>&nbsp;&nbsp;&nbsp;&nbsp;N: LazyArrayLength&lt;T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Extend&lt;T&gt; for StorageStash&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: PackedLayout,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Extend&lt;T&gt; for StorageVec&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: PackedLayout,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;K, V, H&gt; Extend&lt;(K, V)&gt; for LazyHashMap&lt;K, V, H&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Ord + Clone + PackedLayout,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: PackedLayout,<br>&nbsp;&nbsp;&nbsp;&nbsp;H: Hasher,<br>&nbsp;&nbsp;&nbsp;&nbsp;Key: From&lt;&lt;H as Hasher&gt;::Output&gt;,&nbsp;</span>","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()