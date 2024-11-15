<style scope>
.editor-container hr {
  height: 5px; /* 设置厚度为 5 像素 */
  border: none; /* 去除默认边框 */
  background-color: #ccc; /* 设置背景颜色，因为 border 被去除了 */
  margin: 30px 0;
}
</style>

<script setup>
// 接收来自父组件的 styles prop
const props = defineProps({
  styles: Object,
});
</script>

<template>
  <div class="editor-container">
    <div class="editor">
      <div class="editor-core">
        <div
          data-citation-items="%5B%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F4100175%2Fitems%2FU285LCSS%22%5D%2C%22itemData%22%3A%7B%22id%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F4100175%2Fitems%2FU285LCSS%22%2C%22type%22%3A%22article-journal%22%2C%22abstract%22%3A%22A%20purely%20peer-to-peer%20version%20of%20electronic%20cash%20would%20allow%20online%20payments%20to%20be%20sent%20directly%20from%20one%20party%20to%20another%20without%20going%20through%20a%20financial%20institution.%20Digital%20signatures%20provide%20part%20of%20the%20solution%2C%20but%20the%20main%20benefits%20are%20lost%20if%20a%20trusted%20third%20party%20is%20still%20required%20to%20prevent%20double-spending.%20We%20propose%20a%20solution%20to%20the%20double-spending%20problem%20using%20a%20peer-to-peer%20network.%20The%20network%20timestamps%20transactions%20by%20hashing%20them%20into%20an%20ongoing%20chain%20of%20hash-based%20proof-of-work%2C%20forming%20a%20record%20that%20cannot%20be%20changed%20without%20redoing%20the%20proof-of-work.%20The%20longest%20chain%20not%20only%20serves%20as%20proof%20of%20the%20sequence%20of%20events%20witnessed%2C%20but%20proof%20that%20it%20came%20from%20the%20largest%20pool%20of%20CPU%20power.%20As%20long%20as%20a%20majority%20of%20CPU%20power%20is%20controlled%20by%20nodes%20that%20are%20not%20cooperating%20to%20attack%20the%20network%2C%20they'll%20generate%20the%20longest%20chain%20and%20outpace%20attackers.%20The%20network%20itself%20requires%20minimal%20structure.%20Messages%20are%20broadcast%20on%20a%20best%20effort%20basis%2C%20and%20nodes%20can%20leave%20and%20rejoin%20the%20network%20at%20will%2C%20accepting%20the%20longest%20proof-of-work%20chain%20as%20proof%20of%20what%20happened%20while%20they%20were%20gone.%22%2C%22language%22%3A%22en%22%2C%22page%22%3A%229%22%2C%22source%22%3A%22Zotero%22%2C%22title%22%3A%22Bitcoin%3A%20A%20Peer-to-Peer%20Electronic%20Cash%20System%22%2C%22author%22%3A%5B%7B%22family%22%3A%22Nakamoto%22%2C%22given%22%3A%22Satoshi%22%7D%5D%7D%7D%5D"
          data-schema-version="10"
        >
   
          <h1
            :style="{
              fontSize: styles.h1.fontSize,
              color: styles.h1.color,
              fontWeight: styles.h1.fontWeight,
              textAlign: styles.h1.textAlign,
            }"
          >
            预览一级标题
          </h1>
          <hr />
          <h2
            :style="{
              fontSize: styles.h2.fontSize,
              color: styles.h2.color,
              fontWeight: styles.h2.fontWeight,
              borderBottom: styles.h2.borderBottom,
            }"
          >
            预览二级标题
          </h2>
          <hr />
          <h3
            :style="{
              fontSize: styles.h3.fontSize,
              color: styles.h3.color,
              fontWeight: styles.h3.fontWeight,
              borderBottom: styles.h3.borderBottom,
            }"
          >
            预览三级标题
          </h3>
          <hr />

          <a :style="{ color: styles.link.color }">示例链接</a>
          <hr />
          <blockquote
            :style="{
              color: styles.blockquote.color,
              backgroundColor: styles.blockquote.backgroundColor,
              borderColor: styles.blockquote.borderColor,
            }"
          >
            示例引用
          </blockquote>
          <p>rtl</p>
          <h1>列表预览</h1>
          <ol>
            <li>test1</li>
            <li>test2</li>
            <li>test3</li>
          </ol>
          <ul>
            <li>test1</li>
            <li>test2</li>
            <li>test3</li>
          </ul>
          <h2>Annotations</h2>
          <p>
            <span class="underline" data-annotation="%7B%2...7D%7D"
              ><u style="text-decoration-color: rgb(95, 178, 54)"
                >“Commerce on the Internet has come to rely almost exclusively
                on financial institutions serving as trusted third parties to
                process electronic payments.”</u
              ></span
            >
            <span class="citation" data-citation="%7B%2...7D%7D"
              >(<span class="citation-item">Nakamoto, p. 1</span>)</span
            >
          </p>
          <blockquote>
            <p>
              <span class="highlight" data-annotation="%7B%2...7D%7D"
                >Commerce on the Internet has come to rely almost exclusively on
                financial institutions serving as trusted third parties to
                process electronic payments.</span
              >
              <span class="citation" data-citation="%7B%2...7D%7D"
                >(<span class="citation-item">Nakamoto, p. 1</span>)</span
              >
            </p>
          </blockquote>
          <p>
            <span class="highlight" data-annotation="%7B%2...7D%7D"
              >“Commerce on the Internet has come to rely almost exclusively on
              financial institutions serving as trusted third parties to process
              electronic payments.”</span
            >
            <span class="citation" data-citation="%7B%2...7D%7D"
              >(<span class="citation-item">Nakamoto, p. 1</span>)</span
            >
          </p>
          <p>
            <span class="highlight" data-annotation="%7B%2...7D%7D"
              >“The proof-of-work also solves the problem of determining
              representation in majority decision making.”</span
            >
            <span class="citation" data-citation="%7B%2...7D%7D"
              >(<span class="citation-item">Nakamoto, p. 3</span>)</span
            >
          </p>
          <p>
            <img
              alt=""
              width="663"
              height="282"
              data-attachment-key="DDAAFF11"
              data-annotation="%7B%2...7D%7D"
            /><br /><span class="citation" data-citation="%7B%2...7D%7D"
              >(<span class="citation-item">Nakamoto, p. 5</span>)</span
            >
          </p>
          <p>
            Paragraph - <strong>B</strong><em>I</em><u>U</u
            ><span style="text-decoration: line-through">S</span><sub>2</sub
            ><sup>2</sup><span style="color: rgb(153, 204, 0)">T</span
            ><span style="background-color: rgb(153, 204, 0)">B</span
            ><a href="g" rel="noopener noreferrer nofollow">L</a><code>C</code>
          </p>
          <p>Invalid background-image 1:</p>
          <p></p>
          <p>Invalid background-image 2:</p>
          <p><img src="../../public/logo.png" alt="" /></p>
          <p></p>
          <p>Valid background-image 3:</p>
          <p>
            <img alt="" width="5" height="5" data-attachment-key="9X8L6NIK" />
          </p>
          <p></p>
          <p>External image:</p>
          <p>
            <img
              src="/pic/202405231603347.gif"
              alt=""
              width="1024"
              height="683"
              data-attachment-key="U243VLQ4"
            />
          </p>
          <p>Internal image placeholder (while waiting for the load):</p>
          <p>
            <img
              alt=""
              width="500"
              height="500"
              data-attachment-key="DDAAFFXX"
            />
          </p>
          <p>Dead image</p>
          <p><img alt="" width="500" height="500" /></p>
          <p>Multiple &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;spaces</p>
          <pre
            dir="rtl"
          >Preformatted/code block - <strong>B</strong><em>I</em><u>U</u><span style="text-decoration: line-through">S</span><sub>2</sub><sup>2</sup><span style="color: rgb(153, 204, 0)">T</span><span style="background-color: rgb(153, 204, 0)">B</span><a href="g" rel="noopener noreferrer nofollow">L</a>C
1
2
3
<a href="http://" rel="noopener noreferrer nofollow">Link</a>

</pre>
          <blockquote>
            <p>Blockquote (supports any node)</p>
            <h1>H</h1>
            <ol>
              <li></li>
            </ol>
            <table>
              <tbody>
                <tr>
                  <td>
                    <p></p>
                  </td>
                  <td>
                    <p></p>
                  </td>
                </tr>
              </tbody>
            </table>
          </blockquote>
          <ul>
            <li>
              <p>List (supports any node)</p>
              <ol>
                <li>One</li>
                <li>Two</li>
                <li>Three</li>
                <li>
                  <p>Other</p>
                  <ol>
                    <li>
                      <table>
                        <tbody>
                          <tr>
                            <td>
                              <p></p>
                            </td>
                            <td>
                              <p></p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p></p>
                            </td>
                            <td>
                              <p></p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </li>
                    <li>
                      <img
                        src="/pic/202405231603347.gif"
                        alt=""
                        width="1024"
                        height="683"
                        data-attachment-key="D5SV4X5L"
                      />
                    </li>
                    <li>
                      <blockquote>
                        <p></p>
                      </blockquote>
                    </li>
                  </ol>
                </li>
              </ol>
              <p></p>
            </li>
          </ul>
          <table>
            <tbody>
              <tr>
                <th>
                  <p>Th 1</p>
                </th>
                <th>
                  <p>Th 2</p>
                </th>
                <th>
                  <p>Th 3</p>
                </th>
              </tr>
              <tr>
                <td>
                  <p>
                    External image inside table:
                    <img
                      src="/pic/202405231603347.gif"
                      alt=""
                      width="1024"
                      height="683"
                      data-attachment-key="3FFRJY8L"
                    />
                  </p>
                </td>
                <td>
                  <p>List inside table:</p>
                  <ul>
                    <li>Element 1</li>
                    <li>Element 2</li>
                    <li>Element 3</li>
                  </ul>
                </td>
                <td>
                  <p>Table inside table</p>
                  <table>
                    <tbody>
                      <tr>
                        <td style="background-color: green">
                          <p></p>
                        </td>
                        <td>
                          <p></p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p></p>
                        </td>
                        <td>
                          <p></p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <p>Horizontal rule:</p>
          <hr />
          <h1>Marks:</h1>
          <ol>
            <li>
              <strong>strong</strong>
            </li>
            <li>
              <em>emphasis</em>
            </li>
            <li>
              <u>underline</u>
            </li>
            <li>
              <span style="text-decoration: line-through">strike</span>
            </li>
            <li>O<sub>2</sub></li>
            <li>X<sup>2</sup></li>
            <li><code>inline</code> code</li>
            <li><span style="color: rgb(255, 0, 0)">text</span> color</li>
            <li>
              <span style="background-color: rgb(153, 204, 0)">background</span>
              color
            </li>
            <li>
              <a href="#heading-test-1" rel="noopener noreferrer nofollow"
                >internal</a
              >
              and
              <a
                href="https://www.zotero.org"
                rel="noopener noreferrer nofollow"
                >external</a
              >
              link
            </li>
          </ol>
          <p></p>
          <h1>Special cases:</h1>
          <p><strong>Indent (for heading and paragraph only):</strong></p>
          <p style="padding-left: 40px" data-indent="1">indent 1</p>
          <p style="padding-left: 80px" data-indent="2">indent 2</p>
          <p style="padding-left: 120px" data-indent="3">indent 3</p>
          <p style="padding-left: 160px" data-indent="4">indent 4</p>
          <p style="padding-left: 200px" data-indent="5">indent 5</p>
          <p style="padding-left: 4000px" data-indent="100">indent 100</p>
          <p style="padding-left: 4000px" data-indent="100">indent 100</p>
          <p></p>
          <p></p>
          <p></p>
          <p><strong>Alignment (for heading and paragraph only):</strong></p>
          <p style="text-align: left">
            <span style="color: rgb(0, 0, 0)"
              ><span style="background-color: rgb(255, 255, 255)"
                >Align left</span
              ></span
            >
          </p>
          <p style="text-align: center">Align center</p>
          <p style="text-align: right">Align right</p>
          <p style="text-align: justify">
            <span style="color: rgb(0, 0, 0)"
              ><span style="background-color: rgb(255, 255, 255)"
                >Align justify: Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.</span
              ></span
            >
          </p>
          <p></p>
          <p></p>
          <p></p>
          <p>
            <strong>Right-to-left (for heading and paragraph only):</strong>
          </p>
          <p dir="rtl">Right</p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <h1 id="heading-test-1">
            Click the internal link above to navigate here
          </h1>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <blockquote>
            <p>Cite attribute</p>
          </blockquote>
          <p><img src="/logo.png" alt="" /></p>
          <p>Background image extracted</p>
          <p>Invalid background color</p>
          <p>
            <span style="background-color: red">This has a red background</span>
          </p>
          <p>
            <a href="/html/compileonline.mp4" rel="noopener noreferrer nofollow"
              >/html/compileonline.mp4</a
            >
            This browser doesn't support video tag.
          </p>
          <p>
            Please press <code>Ctrl</code> + <code>Shift</code> +
            <code>R</code> to re-render an MDN page.
          </p>
          <p>Paragraph</p>
          <p>in paragraph</p>
          <p></p>
          <p>
            &lt;q&gt;: When Dave asks HAL to open the pod bay door, HAL answers:
            <em>I'm sorry, Dave. I'm afraid I can't do that.</em>
          </p>
          <p><strong>Beast of Bodmin</strong></p>
          <p>A large feline inhabiting Bodmin Moor.</p>
          <p><strong>Morgawr</strong></p>
          <p>A sea serpent.</p>
          <p><strong>Owlman</strong></p>
          <p>A giant owl-like creature.</p>
        </div>
      </div>
    </div>
  </div>
</template>