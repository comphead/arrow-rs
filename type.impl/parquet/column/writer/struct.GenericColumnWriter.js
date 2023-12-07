(function() {var type_impls = {
"parquet":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-GenericColumnWriter%3C'a,+E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/parquet/column/writer/mod.rs.html#240-1071\">source</a><a href=\"#impl-GenericColumnWriter%3C'a,+E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, E: <a class=\"trait\" href=\"parquet/column/writer/encoder/trait.ColumnValueEncoder.html\" title=\"trait parquet::column::writer::encoder::ColumnValueEncoder\">ColumnValueEncoder</a>&gt; <a class=\"struct\" href=\"parquet/column/writer/struct.GenericColumnWriter.html\" title=\"struct parquet::column::writer::GenericColumnWriter\">GenericColumnWriter</a>&lt;'a, E&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/parquet/column/writer/mod.rs.html#241-293\">source</a><h4 class=\"code-header\">pub fn <a href=\"parquet/column/writer/struct.GenericColumnWriter.html#tymethod.new\" class=\"fn\">new</a>(\n    descr: <a class=\"type\" href=\"parquet/schema/types/type.ColumnDescPtr.html\" title=\"type parquet::schema::types::ColumnDescPtr\">ColumnDescPtr</a>,\n    props: <a class=\"type\" href=\"parquet/file/properties/type.WriterPropertiesPtr.html\" title=\"type parquet::file::properties::WriterPropertiesPtr\">WriterPropertiesPtr</a>,\n    page_writer: <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"parquet/column/page/trait.PageWriter.html\" title=\"trait parquet::column::page::PageWriter\">PageWriter</a> + 'a&gt;\n) -&gt; Self</h4></section><section id=\"method.write_batch_internal\" class=\"method\"><a class=\"src rightside\" href=\"src/parquet/column/writer/mod.rs.html#296-389\">source</a><h4 class=\"code-header\">pub(crate) fn <a href=\"parquet/column/writer/struct.GenericColumnWriter.html#tymethod.write_batch_internal\" class=\"fn\">write_batch_internal</a>(\n    &amp;mut self,\n    values: &amp;E::<a class=\"associatedtype\" href=\"parquet/column/writer/encoder/trait.ColumnValueEncoder.html#associatedtype.Values\" title=\"type parquet::column::writer::encoder::ColumnValueEncoder::Values\">Values</a>,\n    value_indices: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>]&gt;,\n    def_levels: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i16.html\">i16</a>]&gt;,\n    rep_levels: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i16.html\">i16</a>]&gt;,\n    min: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;E::<a class=\"associatedtype\" href=\"parquet/column/writer/encoder/trait.ColumnValueEncoder.html#associatedtype.T\" title=\"type parquet::column::writer::encoder::ColumnValueEncoder::T\">T</a>&gt;,\n    max: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;E::<a class=\"associatedtype\" href=\"parquet/column/writer/encoder/trait.ColumnValueEncoder.html#associatedtype.T\" title=\"type parquet::column::writer::encoder::ColumnValueEncoder::T\">T</a>&gt;,\n    distinct_count: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>&gt;\n) -&gt; <a class=\"type\" href=\"parquet/errors/type.Result.html\" title=\"type parquet::errors::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;</h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.write_batch\" class=\"method\"><a class=\"src rightside\" href=\"src/parquet/column/writer/mod.rs.html#403-410\">source</a><h4 class=\"code-header\">pub fn <a href=\"parquet/column/writer/struct.GenericColumnWriter.html#tymethod.write_batch\" class=\"fn\">write_batch</a>(\n    &amp;mut self,\n    values: &amp;E::<a class=\"associatedtype\" href=\"parquet/column/writer/encoder/trait.ColumnValueEncoder.html#associatedtype.Values\" title=\"type parquet::column::writer::encoder::ColumnValueEncoder::Values\">Values</a>,\n    def_levels: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i16.html\">i16</a>]&gt;,\n    rep_levels: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i16.html\">i16</a>]&gt;\n) -&gt; <a class=\"type\" href=\"parquet/errors/type.Result.html\" title=\"type parquet::errors::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Writes batch of values, definition levels and repetition levels.\nReturns number of values processed (written).</p>\n<p>If definition and repetition levels are provided, we write fully those levels and\nselect how many values to write (this number will be returned), since number of\nactual written values may be smaller than provided values.</p>\n<p>If only values are provided, then all values are written and the length of\nof the values buffer is returned.</p>\n<p>Definition and/or repetition levels can be omitted, if values are\nnon-nullable and/or non-repeated.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.write_batch_with_statistics\" class=\"method\"><a class=\"src rightside\" href=\"src/parquet/column/writer/mod.rs.html#419-437\">source</a><h4 class=\"code-header\">pub fn <a href=\"parquet/column/writer/struct.GenericColumnWriter.html#tymethod.write_batch_with_statistics\" class=\"fn\">write_batch_with_statistics</a>(\n    &amp;mut self,\n    values: &amp;E::<a class=\"associatedtype\" href=\"parquet/column/writer/encoder/trait.ColumnValueEncoder.html#associatedtype.Values\" title=\"type parquet::column::writer::encoder::ColumnValueEncoder::Values\">Values</a>,\n    def_levels: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i16.html\">i16</a>]&gt;,\n    rep_levels: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i16.html\">i16</a>]&gt;,\n    min: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;E::<a class=\"associatedtype\" href=\"parquet/column/writer/encoder/trait.ColumnValueEncoder.html#associatedtype.T\" title=\"type parquet::column::writer::encoder::ColumnValueEncoder::T\">T</a>&gt;,\n    max: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;E::<a class=\"associatedtype\" href=\"parquet/column/writer/encoder/trait.ColumnValueEncoder.html#associatedtype.T\" title=\"type parquet::column::writer::encoder::ColumnValueEncoder::T\">T</a>&gt;,\n    distinct_count: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>&gt;\n) -&gt; <a class=\"type\" href=\"parquet/errors/type.Result.html\" title=\"type parquet::errors::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Writer may optionally provide pre-calculated statistics for use when computing\nchunk-level statistics</p>\n<p>NB: <a href=\"parquet/file/properties/struct.WriterProperties.html#method.statistics_enabled\" title=\"method parquet::file::properties::WriterProperties::statistics_enabled\"><code>WriterProperties::statistics_enabled</code></a> must be set to <a href=\"parquet/file/properties/enum.EnabledStatistics.html#variant.Chunk\" title=\"variant parquet::file::properties::EnabledStatistics::Chunk\"><code>EnabledStatistics::Chunk</code></a>\nfor these statistics to take effect. If <a href=\"parquet/file/properties/enum.EnabledStatistics.html#variant.None\" title=\"variant parquet::file::properties::EnabledStatistics::None\"><code>EnabledStatistics::None</code></a> they will be ignored,\nand if <a href=\"parquet/file/properties/enum.EnabledStatistics.html#variant.Page\" title=\"variant parquet::file::properties::EnabledStatistics::Page\"><code>EnabledStatistics::Page</code></a> the chunk statistics will instead be computed from the\ncomputed page statistics</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_total_bytes_written\" class=\"method\"><a class=\"src rightside\" href=\"src/parquet/column/writer/mod.rs.html#444-446\">source</a><h4 class=\"code-header\">pub fn <a href=\"parquet/column/writer/struct.GenericColumnWriter.html#tymethod.get_total_bytes_written\" class=\"fn\">get_total_bytes_written</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a></h4></section></summary><div class=\"docblock\"><p>Returns total number of bytes written by this column writer so far.\nThis value is also returned when column writer is closed.</p>\n<p>Note: this value does not include any buffered data that has not\nyet been flushed to a page.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_estimated_total_bytes\" class=\"method\"><a class=\"src rightside\" href=\"src/parquet/column/writer/mod.rs.html#453-457\">source</a><h4 class=\"code-header\">pub(crate) fn <a href=\"parquet/column/writer/struct.GenericColumnWriter.html#tymethod.get_estimated_total_bytes\" class=\"fn\">get_estimated_total_bytes</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a></h4></section></summary><div class=\"docblock\"><p>Returns the estimated total bytes for this column writer</p>\n<p>Unlike <a href=\"parquet/column/writer/struct.GenericColumnWriter.html#method.get_total_bytes_written\" title=\"method parquet::column::writer::GenericColumnWriter::get_total_bytes_written\"><code>Self::get_total_bytes_written</code></a> this includes an estimate\nof any data that has not yet been flushed to a page</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_total_rows_written\" class=\"method\"><a class=\"src rightside\" href=\"src/parquet/column/writer/mod.rs.html#461-463\">source</a><h4 class=\"code-header\">pub fn <a href=\"parquet/column/writer/struct.GenericColumnWriter.html#tymethod.get_total_rows_written\" class=\"fn\">get_total_rows_written</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a></h4></section></summary><div class=\"docblock\"><p>Returns total number of rows written by this column writer so far.\nThis value is also returned when column writer is closed.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_descriptor\" class=\"method\"><a class=\"src rightside\" href=\"src/parquet/column/writer/mod.rs.html#466-468\">source</a><h4 class=\"code-header\">pub fn <a href=\"parquet/column/writer/struct.GenericColumnWriter.html#tymethod.get_descriptor\" class=\"fn\">get_descriptor</a>(&amp;self) -&gt; &amp;<a class=\"type\" href=\"parquet/schema/types/type.ColumnDescPtr.html\" title=\"type parquet::schema::types::ColumnDescPtr\">ColumnDescPtr</a></h4></section></summary><div class=\"docblock\"><p>Returns a reference to a <a href=\"parquet/schema/types/type.ColumnDescPtr.html\" title=\"type parquet::schema::types::ColumnDescPtr\"><code>ColumnDescPtr</code></a></p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.close\" class=\"method\"><a class=\"src rightside\" href=\"src/parquet/column/writer/mod.rs.html#472-509\">source</a><h4 class=\"code-header\">pub fn <a href=\"parquet/column/writer/struct.GenericColumnWriter.html#tymethod.close\" class=\"fn\">close</a>(self) -&gt; <a class=\"type\" href=\"parquet/errors/type.Result.html\" title=\"type parquet::errors::Result\">Result</a>&lt;<a class=\"struct\" href=\"parquet/column/writer/struct.ColumnCloseResult.html\" title=\"struct parquet::column::writer::ColumnCloseResult\">ColumnCloseResult</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Finalizes writes and closes the column writer.\nReturns total bytes written, total rows written and column chunk metadata.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.write_mini_batch\" class=\"method\"><a class=\"src rightside\" href=\"src/parquet/column/writer/mod.rs.html#514-596\">source</a><h4 class=\"code-header\">fn <a href=\"parquet/column/writer/struct.GenericColumnWriter.html#tymethod.write_mini_batch\" class=\"fn\">write_mini_batch</a>(\n    &amp;mut self,\n    values: &amp;E::<a class=\"associatedtype\" href=\"parquet/column/writer/encoder/trait.ColumnValueEncoder.html#associatedtype.Values\" title=\"type parquet::column::writer::encoder::ColumnValueEncoder::Values\">Values</a>,\n    values_offset: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>,\n    value_indices: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>]&gt;,\n    num_levels: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>,\n    def_levels: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i16.html\">i16</a>]&gt;,\n    rep_levels: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i16.html\">i16</a>]&gt;\n) -&gt; <a class=\"type\" href=\"parquet/errors/type.Result.html\" title=\"type parquet::errors::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Writes mini batch of values, definition and repetition levels.\nThis allows fine-grained processing of values and maintaining a reasonable\npage size.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.should_dict_fallback\" class=\"method\"><a class=\"src rightside\" href=\"src/parquet/column/writer/mod.rs.html#603-608\">source</a><h4 class=\"code-header\">fn <a href=\"parquet/column/writer/struct.GenericColumnWriter.html#tymethod.should_dict_fallback\" class=\"fn\">should_dict_fallback</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Returns true if we need to fall back to non-dictionary encoding.</p>\n<p>We can only fall back if dictionary encoder is set and we have exceeded dictionary\nsize.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.should_add_data_page\" class=\"method\"><a class=\"src rightside\" href=\"src/parquet/column/writer/mod.rs.html#612-623\">source</a><h4 class=\"code-header\">fn <a href=\"parquet/column/writer/struct.GenericColumnWriter.html#tymethod.should_add_data_page\" class=\"fn\">should_add_data_page</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Returns true if there is enough data for a data page, false otherwise.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.dict_fallback\" class=\"method\"><a class=\"src rightside\" href=\"src/parquet/column/writer/mod.rs.html#627-635\">source</a><h4 class=\"code-header\">fn <a href=\"parquet/column/writer/struct.GenericColumnWriter.html#tymethod.dict_fallback\" class=\"fn\">dict_fallback</a>(&amp;mut self) -&gt; <a class=\"type\" href=\"parquet/errors/type.Result.html\" title=\"type parquet::errors::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Performs dictionary fallback.\nPrepares and writes dictionary and all data pages into page writer.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.update_column_offset_index\" class=\"method\"><a class=\"src rightside\" href=\"src/parquet/column/writer/mod.rs.html#638-716\">source</a><h4 class=\"code-header\">fn <a href=\"parquet/column/writer/struct.GenericColumnWriter.html#tymethod.update_column_offset_index\" class=\"fn\">update_column_offset_index</a>(\n    &amp;mut self,\n    page_statistics: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;<a class=\"struct\" href=\"parquet/file/statistics/struct.ValueStatistics.html\" title=\"struct parquet::file::statistics::ValueStatistics\">ValueStatistics</a>&lt;E::<a class=\"associatedtype\" href=\"parquet/column/writer/encoder/trait.ColumnValueEncoder.html#associatedtype.T\" title=\"type parquet::column::writer::encoder::ColumnValueEncoder::T\">T</a>&gt;&gt;\n)</h4></section></summary><div class=\"docblock\"><p>Update the column index and offset index when adding the data page</p>\n</div></details><section id=\"method.truncate_min_value\" class=\"method\"><a class=\"src rightside\" href=\"src/parquet/column/writer/mod.rs.html#718-727\">source</a><h4 class=\"code-header\">fn <a href=\"parquet/column/writer/struct.GenericColumnWriter.html#tymethod.truncate_min_value\" class=\"fn\">truncate_min_value</a>(\n    &amp;self,\n    truncation_length: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;,\n    data: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]\n) -&gt; (<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>)</h4></section><section id=\"method.truncate_max_value\" class=\"method\"><a class=\"src rightside\" href=\"src/parquet/column/writer/mod.rs.html#729-738\">source</a><h4 class=\"code-header\">fn <a href=\"parquet/column/writer/struct.GenericColumnWriter.html#tymethod.truncate_max_value\" class=\"fn\">truncate_max_value</a>(\n    &amp;self,\n    truncation_length: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;,\n    data: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]\n) -&gt; (<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>)</h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.add_data_page\" class=\"method\"><a class=\"src rightside\" href=\"src/parquet/column/writer/mod.rs.html#742-874\">source</a><h4 class=\"code-header\">fn <a href=\"parquet/column/writer/struct.GenericColumnWriter.html#tymethod.add_data_page\" class=\"fn\">add_data_page</a>(&amp;mut self) -&gt; <a class=\"type\" href=\"parquet/errors/type.Result.html\" title=\"type parquet::errors::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Adds data page.\nData page is either buffered in case of dictionary encoding or written directly.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.flush_data_pages\" class=\"method\"><a class=\"src rightside\" href=\"src/parquet/column/writer/mod.rs.html#879-890\">source</a><h4 class=\"code-header\">fn <a href=\"parquet/column/writer/struct.GenericColumnWriter.html#tymethod.flush_data_pages\" class=\"fn\">flush_data_pages</a>(&amp;mut self) -&gt; <a class=\"type\" href=\"parquet/errors/type.Result.html\" title=\"type parquet::errors::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Finalises any outstanding data pages and flushes buffered data pages from\ndictionary encoding into underlying sink.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.write_column_metadata\" class=\"method\"><a class=\"src rightside\" href=\"src/parquet/column/writer/mod.rs.html#893-982\">source</a><h4 class=\"code-header\">fn <a href=\"parquet/column/writer/struct.GenericColumnWriter.html#tymethod.write_column_metadata\" class=\"fn\">write_column_metadata</a>(&amp;mut self) -&gt; <a class=\"type\" href=\"parquet/errors/type.Result.html\" title=\"type parquet::errors::Result\">Result</a>&lt;<a class=\"struct\" href=\"parquet/file/metadata/struct.ColumnChunkMetaData.html\" title=\"struct parquet::file::metadata::ColumnChunkMetaData\">ColumnChunkMetaData</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Assembles and writes column chunk metadata.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encode_levels_v1\" class=\"method\"><a class=\"src rightside\" href=\"src/parquet/column/writer/mod.rs.html#986-990\">source</a><h4 class=\"code-header\">fn <a href=\"parquet/column/writer/struct.GenericColumnWriter.html#tymethod.encode_levels_v1\" class=\"fn\">encode_levels_v1</a>(\n    &amp;self,\n    encoding: <a class=\"enum\" href=\"parquet/basic/enum.Encoding.html\" title=\"enum parquet::basic::Encoding\">Encoding</a>,\n    levels: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i16.html\">i16</a>],\n    max_level: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i16.html\">i16</a>\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt; <a href=\"#\" class=\"tooltip\" data-notable-ty=\"Vec&lt;u8&gt;\">ⓘ</a></h4></section></summary><div class=\"docblock\"><p>Encodes definition or repetition levels for Data Page v1.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encode_levels_v2\" class=\"method\"><a class=\"src rightside\" href=\"src/parquet/column/writer/mod.rs.html#995-999\">source</a><h4 class=\"code-header\">fn <a href=\"parquet/column/writer/struct.GenericColumnWriter.html#tymethod.encode_levels_v2\" class=\"fn\">encode_levels_v2</a>(&amp;self, levels: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i16.html\">i16</a>], max_level: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i16.html\">i16</a>) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt; <a href=\"#\" class=\"tooltip\" data-notable-ty=\"Vec&lt;u8&gt;\">ⓘ</a></h4></section></summary><div class=\"docblock\"><p>Encodes definition or repetition levels for Data Page v2.\nEncoding is always RLE.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.write_data_page\" class=\"method\"><a class=\"src rightside\" href=\"src/parquet/column/writer/mod.rs.html#1003-1012\">source</a><h4 class=\"code-header\">fn <a href=\"parquet/column/writer/struct.GenericColumnWriter.html#tymethod.write_data_page\" class=\"fn\">write_data_page</a>(&amp;mut self, page: <a class=\"struct\" href=\"parquet/column/page/struct.CompressedPage.html\" title=\"struct parquet::column::page::CompressedPage\">CompressedPage</a>) -&gt; <a class=\"type\" href=\"parquet/errors/type.Result.html\" title=\"type parquet::errors::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Writes compressed data page into underlying sink and updates global metrics.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.write_dictionary_page\" class=\"method\"><a class=\"src rightside\" href=\"src/parquet/column/writer/mod.rs.html#1016-1045\">source</a><h4 class=\"code-header\">fn <a href=\"parquet/column/writer/struct.GenericColumnWriter.html#tymethod.write_dictionary_page\" class=\"fn\">write_dictionary_page</a>(&amp;mut self) -&gt; <a class=\"type\" href=\"parquet/errors/type.Result.html\" title=\"type parquet::errors::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Writes dictionary page into underlying sink.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.update_metrics_for_page\" class=\"method\"><a class=\"src rightside\" href=\"src/parquet/column/writer/mod.rs.html#1049-1070\">source</a><h4 class=\"code-header\">fn <a href=\"parquet/column/writer/struct.GenericColumnWriter.html#tymethod.update_metrics_for_page\" class=\"fn\">update_metrics_for_page</a>(&amp;mut self, page_spec: <a class=\"struct\" href=\"parquet/column/page/struct.PageWriteSpec.html\" title=\"struct parquet::column::page::PageWriteSpec\">PageWriteSpec</a>)</h4></section></summary><div class=\"docblock\"><p>Updates column writer metrics with each page metadata.</p>\n</div></details></div></details>",0,"parquet::column::writer::ColumnWriterImpl"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()