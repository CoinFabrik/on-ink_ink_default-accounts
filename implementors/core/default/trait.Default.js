(function() {var implementors = {};
implementors["ink_core"] = [{"text":"impl Default for ReturnFlags","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Default for ReturnType&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Default for Unset&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl Default for AccountId","synthetic":false,"types":[]},{"text":"impl Default for Hash","synthetic":false,"types":[]},{"text":"impl Default for BitStash","synthetic":false,"types":[]},{"text":"impl Default for StorageBitvec","synthetic":false,"types":[]},{"text":"impl&lt;K, V, H&gt; Default for StorageHashMap&lt;K, V, H&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Ord + Clone + PackedLayout,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: PackedLayout,<br>&nbsp;&nbsp;&nbsp;&nbsp;H: Hasher,<br>&nbsp;&nbsp;&nbsp;&nbsp;Key: From&lt;&lt;H as Hasher&gt;::Output&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T, N&gt; Default for SmallVec&lt;T, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: PackedLayout,<br>&nbsp;&nbsp;&nbsp;&nbsp;N: LazyArrayLength&lt;T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Default for StorageStash&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: PackedLayout,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Default for Vec&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: PackedLayout,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;K, V, H&gt; Default for LazyHashMap&lt;K, V, H&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Ord,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T, N&gt; Default for LazyArray&lt;T, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;N: LazyArrayLength&lt;T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Default for LazyCell&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Default + SpreadLayout,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;V&gt; Default for LazyIndexMap&lt;V&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Default for Lazy&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Default + SpreadLayout,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Default for Memory&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Default,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Default for Pack&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Default,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["ink_lang"] = [{"text":"impl&lt;'a, T&gt; Default for EnvAccess&lt;'a, T&gt;","synthetic":false,"types":[]}];
implementors["ink_primitives"] = [{"text":"impl Default for Key","synthetic":false,"types":[]}];
implementors["scale_info"] = [{"text":"impl&lt;S&gt; Default for TypeBuilder&lt;S&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Default for FieldsBuilder&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Default&gt; Default for VariantsBuilder&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Ord&gt; Default for Interner&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl Default for Registry","synthetic":false,"types":[]},{"text":"impl Default for Path","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()