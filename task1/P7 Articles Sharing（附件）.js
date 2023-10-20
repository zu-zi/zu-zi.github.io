const arr = [
  {
    title: `vscode远程控制Ubuntu（remote - ssh）`,
    author: `今朝无言`,
    time: `2022-06-23`,
    label: [`ssh`, `vscode`, `ubuntu`],
    column: `嵌入式`,
    address: `原文链接：https://blog.csdn.net/qq_43557686/article/details/125426060`,
    content: ` <p>我以往做嵌入式，一般都要在Ubuntu下进行开发，进行文件传输的时候，又要回到windows下进行操作，来回操作两台电脑/设备，实在有些麻烦。不过VScode下有个插件remote -ssh，可以远程访问其他带ssh的设备。下面对该插件的安装、配置与使用进行简单介绍</p>

<h2>remote -ssh安装与配置</h2>
<p>1、打开vscode，在拓展中搜索remote -ssh，安装如下图所示的第1个插件，第四个Editing Configuration插件会自动安装</p>
<p>2、在vscode左下角点击“><”的图标（如果没有，可以在紫条条上右击，勾选“远程主机”），然后选择打开SSH配置文件，如果不进行配置而直接选第一、二个选项进行远程连接，其用户名是对不上的。</p>
<p>3、在ssh配置文件中加入如下项，并保存</p>
<p>至此，我们已经安装好了remote-ssh插件，同时设置了一个待连接用户</p>
<h2>远程连接</h2>
<p>1、点击"><"，选择第一个（会打开一个新的窗口）或者第二个选项（在本窗口中打开），选择要连接的用户，我这里是刚才配置的myArm</p>
<p>2、此时会弹出操作系统选项，因为我连接的是Ubuntu（Linux系统），所以选Linux</p>
<p>3、这时会提示输入密码，输入密码，回车。如果连接成功，左下角的"><"会显示已连接的host，如下</p>
<p>4、在左侧的资源管理器中可以打开文件夹，注意也需要输入一次密码。打开文件夹后如下图，可以直接在资源管理器中看到Ubuntu下的文件了，也可以直接在这里进行文件的创建、修改和删除</p>
<p>5、远程启动终端：依次点击 查看->终端 ，打开终端
在终端中可以输入各种命令，就像其他远程连接工具一样，这里我们输入ls，可以看到已经正常进入了Ubuntu下</p>
<h2>结语</h2>
 <p>在VScode中使用remote -ssh可以方便地进行远程连接和文件操作，省去了在多个设备、多个工具之间来回切换的麻烦，对开发者而言简直妙不可言，我要吹爆VScode！ </p>
————————————————
版权声明：本文为CSDN博主「今朝无言」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
`
  },
  {
    title: `VScode远程连接虚拟机(ubuntu系统)`,
    author: `Is Fang`,
    time: `2023-06-06`,
    addrestitle: `原文链接：https://blog.csdn.net/NRWHF/article/details/131029097`,
    content: `
    <h3>文章目录</h3>
<p>1. Windows端安装VScode</p>
<p>2. 安装远程登录插件</p>
<p>3. 配置Remote - SSH插件</p>
关于关闭后如何打开该配置文件
<p>4. 测试ubuntu与windows可否ping通</p>
<p>5. 在Ubuntu中安装 SSH</p>
<br>
<br>
<p>
1.检查是否安装ssh - server</p>
<p>2.安装openssh - server</p>
<p>3.查看ssh服务是否启动</p>
<p>4.Ubuntu中配置openssh - server开机自动启动</p>
<p>5. 重启后检查是否设置成功</p>
<p>6. 初次连接</p>
<p>7. 后续连接</p>
<p>8. vscode配置免密登录</p>
<p>
适用场景：

    由于代码的编译环境都是在虚拟机完成，所以源码一般都是放在虚拟机环境，当需要修改源码时，要有一款好用的编辑器，vscode功能强大，非常适合，但是在虚拟机安装会出现不兼容的情况，可以考虑采用windows安装vscode远程连接虚拟机的使用方式，下面就展开如何使用VScode远程连接虚拟机(ubuntu系统)
注意：当前ubuntu版本为18.04</p>

<h3>1. Windows端安装VScode
vscode官网</h3>

<h3>2. 安装远程登录插件
搜索插件名称：Remote Development，并安装</h3>

下载 Remote- Developoment 插件，会自动安装其他的 Remote 插件，其中会包含 Remote - SSH 插件
注意：在windows端下载的插件不会与虚拟机共享，其他插件也需要根据情况再安装

<h3>3. 配置Remote-SSH插件
安装完成后点击左下角的远程连接</h3>

<p>选择connect to host</p>

<p>初次使用需要添加远程连接的ip，添加过的会有记录</p>

<p>输入需要远程连接的ip地址和用户名，例如：ssh root@192.168.xxx.xxx</p>

<p>选择第一个，即将上面输入的远程ip地址和用户名内容的文件保存到指定的地方</p>

<p>此时右下角出现的配置文件中就有刚刚配置的远程ip和登录用户名，便于用户修改</p>

<p>文件内容如下：</p>
————————————————
版权声明：本文为CSDN博主「Is Fang」的原创文章，遵循CC 4.0 BY - SA版权协议，转载请附上原文出处链接及本声明。
`

  },
  {
    title: `VSCode配置C语言环境（完整版）`,
    author: `SchizophreniA6`,
    time: ` 2020-12-14`,
    address: `原文链接：https://blog.csdn.net/ren648154292/article/details/111151724`,

    content: `<h2>基本步骤</h2>
<p>要在VSCode中配置C语言环境，我们首先可能要一个VSCode（废话），所以先下载安装一个VSCode；
然后肯定需要相关插件，因为VSCode不能直接拿来写C；
然后任何语言的程序在运行前都需要编译，那还需要一个编译器，很可惜VSCode插件里面不自带，所以要自己下载然后配置；
最后在VSCode中进行相关配置，就可以

下载并安装VSCode</p>
<p>vscode下载地址</p>

<p>安装相关插件</p>
<p>打卡后进入如下界面，选择这个C/C++的，然后点击install进行安装，大概几秒钟就好了，安装完成后install按钮会变成uninstall（卸载）：
安装编译器（MinGW-W64 GCC）</p>
<p>下载地址</p>

链接: https://pan.baidu.com/s/1EhmVd97xFRtfy3V3sJzQlg<br>

<p>提取码: qghe</p>

<p>由于官方下载很慢,这里直接给百度云盘的下载地址,</p>

<p>下载完成后解压:</p>
然后配置环境变量<br>

<p>找到这个文件夹内的一个叫bin的文件夹：</p>

<p>然后把它的地址复制一下，找到此电脑（或者我的电脑）——>右键——>属性</p>

<p>然后进入到下面这个页面，打开高级系统设置：</p>

<p>在弹出的页面中选择“高级”分页，找到环境变量，单击打开：</p>

<p>然后在环境变量中的系统变量中，找到Path变量：</p>

<p>打开之后将刚刚复制的地址添加进去：</p>

然后点确定，之前弹出的所有页面都点击确定。然后测试环境配置是否成功：<br>
crtl+R快捷键打开运行窗口，在里面输入cmd，回车打开cmd.exe<br>
在cmd.exe中输入如下命令：<br>
gcc -v -E -x c++ -<br>
如果运行结果像下方图片中这样，就配置成功了。<br>
————————————————
版权声明：本文为CSDN博主「SchizophreniA6」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
`
  },
  {
    title: `记录如何用VSCode写Markdown文档`,
    author: `饭后一杯柠檬茶`,
    time: `2022-09-03`,
    address: `原文链接：https://blog.csdn.net/weixin_62734905/article/details/126675759`,
    content: `
<p>(此笔记仅为本人记录所用)</p>

<h2>1.如何安装vscode插件</h2>
<p>vscode默认是支持Markdown的，但是我们还是需要一些额外的插件来辅助。如前文安装中文包一般，到vscode的插件市场中，搜索Markdown关键字，安装这几个插件——</p>
MarkDown All in One (方便编写)<br>
Makdown Preview Github Styling<br>
Markdown Preview Enhanced (提供导出功能)<br>
第一个插件，是一个组合包，一股脑把最常用的Markdown优化都给你装好；<br>
第二个插件，则是Github使用的Markdown渲染样式，不是特别华丽，很朴素，很简洁的样式，因为很多人用Markdown都是为了使用Github Pages，所以这个样式特别受欢迎。使用这个样式，在本地就能预览Markdown文件最终在Github Pages中显示的效果。<br>
<h2>2.如何新建MarkDown文档</h2>
新建一个文件夹<br>
为了集中管理用Markdown的文档，你可以在你容易找到的地方，专门建立一个文件夹，这取决于大家使用电脑的习惯，每个人都不一样。使用vscode打开这个文件夹，你会在左侧的导航窗口里看到文件夹及文件夹里的文件列表。<br>
新建一个文件<br>
选择新建文件，工作目录上就会多出一行，并且可以输入文件名。<br>
（注意：文件名后一定要带后缀，markdown的后缀是.md）<br>
<h2>3.如何编辑、使用</h2>
<p>3.1 开始编辑文件</p>
当你输入.md的后缀时，你会发现，新建的文件名前多了一个logo，这代表它已经被vscode识别为markdown文件了。现在，你就可以开始写markdown了。<br>
点击右上角的图标–**打开侧边预览（Ctrl+K V）,然后你的页面就变成两栏分列的样子；右侧一栏markdown文件被渲染为HTML的预览；由于我们安装了Github的渲染风格，所以这里会按照Github的样式来渲染你的markdown文件。<br>
<p>3.2 Markdown的部分语法</p>
<p>3.2.1 编辑标题方法</p>
一级标题<br>
二级标题<br>
三级标题<br>
四级标题<br>
五级标题<br>
六级标题<br>
#+空格+一级标题<br>
##+空格+二级标题<br>
###+空格+三级标题<br>
####+空格+四级标题<br>
#####+空格+五级标题<br>
######+空格+六级标题<br>
实现方法如下：<br>
————————————————
版权声明：本文为CSDN博主「饭后一杯柠檬茶lemon」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
`
  },
  {
    title: `Github Page 个人主页——项目部署`,
    author: `Otm-Z`,
    time: `2023-07-11`,
    address: `原文链接：https://blog.csdn.net/m0_47520749/article/details/124767953`,
    content: `<h2>一、前言</h2>
<p>想搭建自己的网站吗？通常需要买一台服务器，购买一个域名进行备案后，解析到自己的服务器，还要搭建环境，后期运维等等…</p>
<p>本文提供一种基于 Github Page 服务搭建个人静态网站的方法。 以最低的成本展示内容，不需要服务器，不需要运维，只需要将项目推送到 Github 上进行托管即可。</p>

<h3>1.1 涉及到的知识</h3>
<p>若后文有看不懂的部分，可以查找相关知识点</p>

Linux基础命令<br>
Git基础使用<br>
Github基础使用<br>
Web开发基础<br>
<h3>1.2 静态网站 VS 动态网站</h3>
<h4>1.2.1 静态网站</h4>
静态网页一般指不需要和后端数据进行交互的网页，也就是数据内容不会动态的更新。

<h4>1.2.2动态网站</h4>
动态网站并不是指具有动画功能的网站，而是指网站内容可根据不同情况动态变更的网站，一般情况下动态网站通过数据库进行架构。

<h3>1.3 Github Page 是什么？</h3>
GitHub Pages 是一个静态站点托管服务。了解更多<br>

<h2>二、部署</h2>
<h3>2.1 创建仓库</h3>
创建Github仓库，填好信息->其他默认->创建<br>

记<p>下你的远程仓库地址，我的是：git@github.com:Z446C/PageTest.git</p>
<h3>2.2 推送项目</h3>
<p>创建3个文件：index.html, styles.css, main.js</p>
<p>index.html源码如下：</p>

<p>styles.css源码如下：</p>

<p>main.js源码如下：</p>

<h2>三、结语</h2>
<h3>3.1 彩蛋</h3>
<p>GitHub留给用户的彩蛋，若一开始创建仓库的时候使用 username.github.io ，将会创建一个特殊的仓库——用于个人展示的静态网页，可以使用使用http://username.github.io 来访问，而不用带上仓库名了，一般使用仓库名是用于项目展示的</p>
————————————————
版权声明：本文为CSDN博主「Otm-Z」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
`
  },
  {
    title: `一文彻底搞懂leveldb架构`,
    author: `神技圈子`,
    time: `2022-05-18`,
    address: `原文链接：https://blog.csdn.net/songguangfan/article/details/124828824`,
    content: `<h2>leveldb</h2>
<p>leveldb是一个写性能十分优秀的存储引擎，是典型的LSM-tree的实现。LSM的核心思想是为了换取最大的写性能而放弃掉部分读性能。那么，为什么leveldb写性能高？简单来说它就是尽量减少随机写的次数。leveldb首先将数据更新到内存中。当内存中的数据量达到一定阈值，将这部分数据再真正刷新到磁盘文件中。一般来说，顺序写60MB/s，随机写45MB/s.</p>

<h3>整体架构</h3>

<h4>leveldb主要由以下几个重要的部件构成：<h4>
1.memtable<br>
2.immutable memtable<br>
3.sstable<br>
4.manifest<br>
5.current<br>
6.log<br>

<h3>memtable</h3>
<p>刚才提到leveldb的一次写入操作并不是直接将数据写入到磁盘文件，而是采用先将数据写入内存的方式。所以,memtable就是一个内存中进行数据组织与维护的结构。在memtable中，数据按用户定义的方法排序之后按序存储。等到其存储内容到达阈值时（4MB）时，便将其转换成一个不可修改的memtable，与此同时创建一个新的memtable来供用户进行读写操作。memtable底层采用跳表，它的大多数操作都是O(logn)。</p>

<h3>immutable memtable</h3>
<p>当memtable的容量达到阈值时，便会转换成一个不可修改的memtable即immutable memtable。它同memtable的结构定义一样。两者的区别只是immutable memtable是只读的。immutable memtable被创建时，leveldb的后台压缩进程便会利用其中的内容创建一个sstable,然后持久化到磁盘中。</p>

<h3>sstable</h3>
<p>leveldb虽然采用了先写内存的方式来提高写效率。但是内存中的数据不可能是无线增长，并且日志中记录的写入操作过多会造成异常发生，而且恢复时间过长。因此内存中的数据达到一定容量就得将数据持久化到磁盘中。除了某些元数据文件，leveldb的数据主要都是通过sstable来存储的。</p>
<p>虽然在内存中，所有的数据都是按序排列的，但是当多个memtable数据持久化到磁盘后，其对应的sstable之间是存在交集的，这样造成在读操作时得对所有的sstable文件进行遍历，严重影响了读效率。所以，leveldb会定期整合这些文件，也叫做compaction。随着compaction的进行，sstable文件在逻辑上被分成若干层。通过内存数据直接dump出来的是level 0 层文件，后期整合出来的level i层文件。sstable本身是不可修改的。</p>

<h3>manifest</h3>
<h4>在leveldb中有个版本的概念。一个版本记录了每一层所有文件的元数据。元数据包括如下几点：</h4>

文件大小<br>
最大key值<br>
自小key值<br>
版本信息十分关键，除了在查找数据时利用两个key值来加快查找，还在其中为了一些compaction的统计值来控制compaction的进行。<br>
可以看到文件的元数据主要包含最小和最小key<br>
<p>{
// tFile holds basic information about a table.
type tFile struct {
    fd         storage.FileDesc
    seekLeft   int32
    size       int64
    imin, imax internalKey
}</p>

————————————————
版权声明：本文为CSDN博主「神技圈子」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
`
  },
  {
    title: `leveldb 原理解析`,
    author: `salyty`,
    time: `2022-05-25`,
    address: `原文链接：https://blog.csdn.net/salyty/article/details/82835833`,
    content: `目录
<h3>概览</h3>
Features<br>
整体结构<br>
Memtable<br>
Immutable Memtable<br>
SSTable 文件（SST）<br>
SSTable的物理结构<br>
Block 物理结构<br>
节省 key 占用空间<br>
在 block 内查找一个 key: 迭代器(Block::Iter)<br>
读取 Block(Table::BlockReader)<br>
DataBlock<br>
为什么 key需要有序<br>
MetaBlock<br>
FilterBlock 物理结构<br>
IndexBlock<br>
MetaIndexBlock<br>
Footer<br>
从 SSTtable 中查找某个 key<br>
读取 Table<br>
Table Cache 结构<br>
Manifest 文件<br>
Current 文件<br>
Log 文件<br>
snapshot<br>
compaction<br>
minor compaction<br>
major compaction<br>
数据压缩<br>
主要操作<br>
写操作<br>
读操作<br>
官网<br>
github<br>
自己加了 comment 的github分支<br>

<p>本文是根据https://blog.csdn.net/qq_26499321/article/details/78063856 并加上自己看代码的笔记整理的 。</p>
<p>很多地方有源码信息。可以据此快速定位源码查看。
图尽量符合拿来主义原则</p>
.

<h3>概览</h3>
<p>LevelDB is a fast key-value storage library written at Google that provides an ordered mapping from string keys to string values.</p>

Features<br>
Keys and values are arbitrary byte arrays.<br>
Data is stored sorted by key.<br>
Callers can provide a custom comparison function to override the sort order.<br>
The basic operations are Put(key,value), Get(key), Delete(key).<br>
Multiple changes can be made in one atomic batch.<br>
Users can create a transient snapshot to get a consistent view of data.<br>
Forward and backward iteration is supported over the data.<br>
Data is automatically compressed using the Snappy compression library.<br>
External activity (file system operations etc.) is relayed through a virtual interface so users can customize the operating system interactions.<br>
LevelDB 是由 Google 开发的 key-value 非关系型数据库存储系统，是基于 LSM(Log-Structured-Merge Tree) 的典型实现，LSM 的原理是：当写数据库时，首先纪录写操作到 log 文件中，然后再操作内存数据库，当达到 checkpoint 时，则写入磁盘，同时删除相应的 log 文件，后续重新生成新的内存数据库和 log 文件。<br>
————————————————
版权声明：本文为CSDN博主「salyty」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
`
  },
  {
    title: `设置前端页面不随系统缩放而改变`,
    author: `Heerey525`,
    time: `2021-01-29`,
    address: `原文链接：https://blog.csdn.net/hl_qianduan/article/details/113394142`,
    content: `<p>场景：是c++内嵌web页面，在一些的显示器（比如2k屏的笔记本电脑）放大字体，给造成页面放大。我们希望的是页面不放大</p>
    </p>解决：获取到当前设备缩放比，然后更改这个缩放比</p>
<p>具体代码：</p>
<br>
   // 判断pc浏览器是否缩放，若返回1则为默认无缩放，如果大于1则是放大，否则缩小<br>
   const ratio = window.devicePixelRatio<br>
   // 这个计算公式是我得出比较合理的结果<br>
   if (ratio != 1) {<br>
      document.body.style.zoom = -0.6 * ratio + 1.6<br>
   }<br>
<br>
 参考：https://www.cnblogs.com/wjw1014/p/13569585.html<br>
————————————————
版权声明：本文为CSDN博主「Heerey525」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
`
  },
  {
    title: `HTML5 页面缩放出现混乱`,
    author: `凌冰_`,
    time: `2020-09-08`,
    address: ``,
    content: `<p>使用鼠标放大缩小页面时，就会出现页面混乱：</p>
    <p>解决：</p>
（1）使用百分比，可以兼容大部分浏览器,必须加一个相对定位！<br>
（2）使用响应式布局，可以使用框架哦！<br>

     <p><link rel="stylesheet" type="text/css" href="css/moxie.css" media=“all and (max-width=980px)”/></p>
     效果如下：<br>`
  },
  {
    title: `【静态网页制作大作业——个人博客搭建】`,
    author: `黍子想写好代码`,
    time: `2022-04-12`,
    address: `原文链接：https://blog.csdn.net/qq_61719813/article/details/124096920`,
    content: `<h2>文章目录</h2>
作品介绍<br>
一、作品展示
<br>
二、代码实现
<br>
预览地址<br>
总结<br>
<h3>作品介绍</h3>
<p>网页作品简介： 寒假期间学习HTML和CSS即部分Javascript后的第一个大作业，搭建一个个人静态博客，后面出于兴趣，将其部署到GitPage上并利用GitHub添加了留言功能。</p>

<h3>一、作品展示</h3>

<h3>二、代码实现</h3>
代码如下（示例）：<br>

<h3>总结</h3>
<p>以上就是今天要讲的内容，本文仅仅简单介绍了个人静态博客，而部署个人静态博客基本上是所有前端开发者必经的一个阶段。</p>
————————————————
版权声明：本文为CSDN博主「黎子想写好代码」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
`

  },
  {
    title: `GitHub设置代理 提升速度`,
    author: `little-mouse`,
    time: `2019-08-30`,
    address: ``,
    content: `<h2>原因：从github上clone或者download一个项目，慢的要命！</h2>
<h3>设置代理</h3>
如果socks5（SSR）<br>
第一，你需要知道你本地的socks5代理ip地址和端口。<br>
例如。127.0.0.1端口1080<br>
然后使用此命令设置代理<br>
<p>
git config --global http.https://github.com.proxy socks5://127.0.0.1:1080<br>
git config --global https.https://github.com.proxy socks5://127.0.0.1:1080
</p>
如果http / https<br>
使用此命令：<br>
<p>
git config --global https.proxy http://127.0.0.1:1080<br>
git config --global https.proxy https://127.0.0.1:1080
</p>
<h3>取消代理</h3>
<p>
git config --global --unset http.proxy<br>
git config --global --unset https.proxy
</p>`
  },
  {
    title: `Web前端之实现手风琴效果`,
    author: `晚风挽着浮云`,
    time: `2022-03-06`,
    address: `原文链接：https://blog.csdn.net/weixin_57636278/article/details/123308994`,
    content: `
    <p>代码如下</p>
    j<p>s中使用鼠标点击事件</p>

getElementById() ：获取带有指定 id 的节点<br>
getElementsByTagName()： 获取带有指定标签名的节点集合<br>
querySelector() ：获取指定选择器或选择器组匹配的第一个节点<br>
querySelectorAll()：获取指定选择器或选择器组匹配的所有节点集合；<br>

我们在使用javascript中的Dom时，要使用驼峰命名！<br>

<p>源代码中使用了两种方法，实现展开收起效果，推荐使用第二种!!!</p>

<p>实现效果：</p>

<p>备注：如有错误，请谅解！</p>

<p>此文章为本人学习笔记，仅供参考！如有重复！！！请联系本人！</p>
————————————————
版权声明：本文为CSDN博主「晚风挽着浮云」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
`
  },
  {
    title: `localStorage的存储,读取,删除`,
    author: `沈胖三`,
    time: `2018-09-29`,
    address: ``,
    content: `<h3>localStorage存储</h3>
<p>我们通过以下方式将数据储存到localStorage中</p>

<p>但有时value为一个对象Object,以上面的方式写入,会出现读取的返回值为
{object Object}的情况,但这并不是我们想要的,此时我们需要使用新的方式
传入Object</p>

<p>通过JSON.stringify(Object)方法将对象转化为一个json格式的字符串进行存储</p>

<h3>localStorage读取</h3>
<p>
我们通过以下方式来读取localStorage中的值
相对的在读取json格式字符串只有我们也无法直接使用,需要将它转换为josn对象之后才是我们想要的结果,所以我们需要调用 JSON.parse()方法来进行转化,
之后在继续使用</p>
<h3>localStorage删除</h3>
<p>我们通过以下方法来删除对应key以及key中的内容</p>
<h3>localStorage清空</h3>
<p>清空localStorage中所有的key;</p>
注意:请谨慎使用,它会清空所有的本地存储数据`
  },
  {
    title: `超详细！弹性盒子(display:flex)`,
    author: `萤惑`,
    time: `2022-09-11`,
    address: `原文链接：https://blog.csdn.net/weixin_49602426/article/details/126439791`,
    content: `<h3>什么是弹性盒子</h3>
<p>一般来说我们在css中用到的display大多数都接block(块级元素)、inline-block(行内块元素)、inline(行内元素)，这些在我们所平时需要的大部分地方都很好使，但是在某些地方会具有一定的局限性，让我们很难调样式，那么弹性盒子(弹性布局)就有可能会很好的帮助到你</p>

<p>弹性盒子可以批量式的改变子元素的布局！</p>

<p>那么弹性盒子用在什么地方比较合适呢：</p>
1.当一个盒子里的子元素需要垂直居中一个块的内容<br>
2.当盒子里所有的子元素占用等量的可用宽度/高度时<br>
3.当多列布局中都需要相同的高度(不用理会内容)<br>

<p>所以，弹性布局最适合用在什么地方呢？对！就是我们前端初学并且可能都要一直接触的购物页面。</p>
<p>那些繁琐看起来一样，感觉写起来很简单，但是调起样式来令人头大的购物商品页面，什么左浮动右浮动什么边距我们统统不要，不要1226，不要998，弹性盒子两三句话就可以直接搞定！炒鸡实惠。</p>

<h3>如何使用弹性盒子</h3>
<p>在刚刚的介绍里面可以发现，很多的描述都有关父子，所以我们弹性盒子的设置，首先就是在父级盒子里面加上display:flex; 来人，上代码。</p>

<p>没人…那我自己来</p>

flex系列<br>
flex系列之flex常用版<br>
首先，这是没有添加弹性盒子的<br>
<br>
<br>
<br>
row：主轴对齐，也可以说是水平对齐，也就是从左到右对齐；<br>
row-reverse：主轴对齐，reverse(翻转)，所以这里是从右到左对齐；<br>


————————————————
版权声明：本文为CSDN博主「荧惑」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
`
  },
  {
    title: `学习jQuery这一篇就够了`,
    author: `轻松的小希`,
    time: `2022-10-20`,
    address: `原文链接：https://blog.csdn.net/qq_38490457/article/details/109683256`,
    content: `<h2>第一章 jQuery简介</h2>
<h3>1.1、jQuery简介</h3>
<p>jQuery 是一个高效、精简并且功能丰富的 JavaScript 工具库。它提供的 API 易于使用且兼容众多浏览器，这让诸如 HTML 文档遍历和操作、事件处理、动画和 Ajax 操作更加简单。目前超过90%的网站都使用了jQuery库，jQuery的宗旨：写的更少，做得更多！</p>

<h3>1.2、jQuery官网</h3>
官方地址：点击打开<br>

官方文档：点击打开<br>

<h3>1.3、jQuery版本介绍</h3>
1.x （本教程所采用）<br>
兼容老版本IE<br>
文件较大，但兼容性最好<br>
2.x<br>
部分IE8及以下版本不支持<br>
文件较小，执行效率更高<br>
3.x<br>
完全不再支持IE8及以下版本<br>
提供了一些新的API<br>
提供不包含AJAX/动画API的版本<br>
<h3>1.4、jQuery引入方式</h3>
<p>本地引入：将jQuery下载下来，然后导入项目中，使用script标签进行引用</p>
<p>CDN引入：使用远程CDN资源库在线引入，避免了文件下载（本教程所采用</p>
<h3>1.5、jQuery快速使用</h3>
<h3>1.6、jQuery两把利器</h3>
<p>jQuery两把利器分别是：</p>

<p>jQuery核心函数：即： $() 或 jQuery()，jQuery定义了这个全局的函数供我们调用，它既可作为一般函数调用，且传递的参数类型不同/格式不同，功能就完全不同，也可作为对象调用其定义好的方法，此时 $ 就是一个工具对象。</p>
<p>jQuery核心对象：即执行jQuery核心函数返回的对象，jQuery对象内部包含的是dom元素对象的伪数组(可能只有一个元素)，jQuery对象拥有很多有用的属性和方法，让程序员能方便的操作dom，调用jQuery对象的任何方法后返回的还是当前jQuery对象</p>
————————————————
版权声明：本文为CSDN博主「轻松的小希」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
`
  },
  {
    title: `什么是API？（详细解说)`,
    author: `代码之路无极限`,
    time: `2023-02-22`,
    address: `原文链接：https://blog.csdn.net/weixin_44353800/article/details/129166128`,
    content: `<p>编程资料时经常会看到API这个名词，网上各种高大上的解释估计放倒了一批初学者。初学者看到下面这一段话可能就有点头痛了。</p>

<h5>API（Application Programming Interface,应用程序编程接口）是一些预先定义的函数，目的是提供应用程序与开发人员基于某软件或硬件得以访问一组例程的能力，而又无需访问源码，或理解内部工作机制的细节。——百度百科</h5>

<p>这篇文章我们就来通俗易懂地解释下什么叫做 API，你只需要花费1分钟时间。</p>
<h4>从文件操作开始谈API。 </h4>
<p> 获取key和密钥</p>

<p>以C语言为例，我们使用fopen()函数可以打开一个文件，感觉非常简单。文件保存在硬盘上，要经过复杂的处理才能显示，这些细节对我们来说是透明的，由操作系统完成。也就是说，我们调用fopen()函数来通知操作系统，让操作系统打开一个文件。</p>

<p>那么，我们如何告诉操作系统打开文件呢？</p>

<p>看似简单的操作到底层都非常复杂，打开文件首先要扫描硬盘，找到文件的位置，然后从文件中读取一部分数据，将数据放进I/O缓冲区，放进内存；这些数据都是0、1序列，还要对照ASCII表或Unicode表”翻译“成字符，再在显示器上显示出来。这个过程如果要让程序员来完成，那简直是噩梦！</p>

<p>怎么办呢？操作系统想了一个很好的办法，它预先把这些复杂的操作写在一个函数里面，编译成一个组件（一般是动态链接库），随操作系统一起发布，并配上说明文档，程序员只需要简单地调用这些函数就可以完成复杂的工作，让编程变得简单有趣。这些封装好的函数，就叫做API(Application Programming Interface)，即应用程序编程接口。</p>

<p>说得更加通俗易懂一些，别人写好的代码，或者编译好的程序，提供给你使用，就叫做API。你使用了别人代码（或者程序）中的某个函数、类、对象，就叫做使用了某个API。</p>

<h4>操作系统 API。</h4>

  <p>操作系统已经为我们实现了很多功能，它们都被封装成了一个一个的函数，有成百上千个之多，这些函数就叫做 API。程序员要想使用某个功能，只需要调用相应的函数。Windows、Linux、Mac OS、Unix 这些常见的操作系统大部分功能都使用C语言开发，它们的 API 也以C语言的形式呈现。操作系统 API 数目众多，官方必须提供详细的说明文档（Windows API 的说明文档叫 MSDN），程序员在使用 API 时，需要频繁地查阅这些文档。</p>
  <p>Windows API控件与消息函数 ,如：</p>

                <p>                     1.AdjustWindowRect 给定一种窗口样式，计算获得目标客户区矩形所需的窗口大小。</p>

                <p>                     2.AnyPopup 判断屏幕上是否存在任何弹出式窗口。</p>

                <p>                     3.ArrangeIconicWindows 排列一个父窗口的最小化子窗口。</p>

<h4>编程语言 API</h4>

<p>各种编程语言自带的标准库其实也是API。这些API由编程语言的开发者们编写，安全、高效、健壮，为我们实现了常见的功能，让我们不用再重复造轮子。</p>

C语言 API 以函数的形式呈现，例如 printf()、scanf()、fopen() 等。<br>

Java API 主要以类的形式呈现，例如 String、Thread、Date 等。<br>

C++ 是在C语言的基础上进行的扩展，所以 C++ API 既包含函数也包含类。<br>

第三方库（框架）<br>

libxml2——xml的c语言版库，2个项目使用过，win和Linux下都很犀利~~比较快捷<br>

CURL—— 这个用的主要是使用了他的封装的http和https的请求，比较犀利，其中包含了openssl的内容<br>

iconv——功能强大的编码格式转化库，UTF8，Unicode等互相转化很方便<br>

openssl——C的开源密库，可以进行证书加密和https的访问的模拟提交可以和CURL配合使用<br>

cocos2d——2D游戏引擎，相比较传统的UI自己控制的重画<br>

OpenCV——开源图像库<br>

<p>还有很多第三方（非官方）的组织机构、公司、个人提供的代码，也是一种 API。这些代码有的免费，有的收费；有的开源，有的闭源。这些代码大都针对某个特定的应用领域编写，有时候被称为框架或者库。例如基于C语言的图形界面库GTK，基于C++的网络库ACE，基于Java的大数据处理平台Hadoop，基于Python的Web开发框架Django，基于JavaScript的前端开发框架React。</p>

<p>全球最大的代码托管网站GitHub也贡献了很多优秀的代码，它们大都开源免费。作为开源代码库以及版本控制系统，Github拥有超过900万开发者用户。随着越来越多的应用程序转移到了云上，Github已经成为了管理软件开发以及发现已有代码的首选方法。。这些第三方的API数目众多，种类丰富，我们应该大胆去使用，尽量避免重复造轮子。</p>

<p>常见问题:</p>

<p>假设你想在你的窗体模块中声明一个函数，粘贴然后运行，VB会告诉你：编译错误...Declare 语句不允许作为类或对象模块中的Public(公共的) 成员。..看起来很糟糕，其实你需要做的只是在声明前面添加一个Private(私有的)。不要忘了，可是这将使该函数只在该窗体模块可用。. 在有些情况下，你会得到"不明确的名称"这样的提示，这是因为函数、常量或其他的什么东西共用了一个名称。由于绝大多数的函数都进行了别名化，亦即意味着你可以通过Alias子句使用其它的而不是他们原有的名称，你只需简单地改变一下函数名称而它仍然可以正常运行。</p>

<p>总结：API随处可见，它屏蔽了很多底层细节，实现了很多常用功能，大大简化了程序员的工作。用好API，事半功倍！</p>
————————————————
版权声明：本文为CSDN博主「代码之路无极限」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
`
  },
  {
    title: `CMake是什么？有什么用？`,
    author: `AndrewZhou924`,
    time: `2018-05-19`,
    address: `原文链接：https://blog.csdn.net/Torres_10/article/details/80371425`,
    content: `<h3>CMake</h3>
<p>CMake是一个跨平台的编译(Build)工具,可以用简单的语句来描述所有平台的编译过程。</p>

<p>CMake能够输出各种各样的makefile或者project文件，能测试编译器所支持的C++特性,类似UNIX下的automake。</p>

<p>假如我们有一个深度学习框架的部分工程列表，里面有超过40个互相调用的工程共同组成，一些用于生成库文件，一些用于实现逻辑功能。他们之间的调用关系复杂而严格，如果我想在这样复杂的框架下进行二次开发，显然只拥有它的源码是远远不够的，还需要清楚的明白这几十个项目之间的复杂关系，在没有原作者的帮助下进行这项工作几乎是不可能的。</p>


<p>即使是原作者给出了相关的结构文档，对新手来说建立工程的过程依旧是漫长而艰辛的，因此CMake的作用就凸显出来了。原作者只需要生成一份CMakeLists.txt文档，框架的使用者们只需要在下载源码的同时下载作者提供的CMakeLists.txt，就可以利用CMake，在”原作者的帮助下“进行工程的搭建。</p>





<h3>什么是makefile？</h3>
<p>或许很多Winodws的程序员都不知道这个东西，因为那些Windows的IDE都为你做了这个工作，但我觉得要作一个好的和professional的程序员，makefile还是要懂。这就好像现在有这么多的HTML的编辑器，但如果你想成为一个专业人士，你还是要了解HTML的标识的含义。特别在Unix下的软件编译，你就不能不自己写makefile了，会不会写makefile，从一个侧面说明了一个人是否具备完成大型工程的能力。因为，makefile关系到了整个工程的编译规则。一个工程中的源文件不计数，其按类型、功能、模块分别放在若干个目录中，makefile定义了一系列的规则来指定，哪些文件需要先编译，哪些文件需要后编译，哪些文件需要重新编译，甚至于进行更复杂的功能操作，因为makefile就像一个Shell脚本一样，其中也可以执行操作系统的命令。makefile带来的好处就是——“自动化编译”，一旦写好，只需要一个make命令，整个工程完全自动编译，极大的提高了软件开发的效率。make是一个命令工具，是一个解释makefile中指令的命令工具，一般来说，大多数的IDE都有这个命令，比如：Delphi的make，Visual C++的nmake，Linux下GNU的make。可见，makefile都成为了一种在工程方面的编译方法。</p>





<h3>为什么使用makefile:</h3>
<p>对于一个大型软件，其编译、维护是一个复杂而耗时的过程。它涉及到大量的文件、目录，这些文件可能是在不同的时间、由不同的人、在不同的地方分别写的，其中一些是程序，有些是数据，有些是文档，有些是衍生文件。甚至参与开发的人员也不一定清楚所有文件的细节，包括如何处理它们。此外，构成软件的文件数目可能达到成百上千，甚至成千上万个，开发过程中当修改了少量几个文件后，往往只需要重新编译、生成少数几个文件。有效地描述这些文件之间的依赖关系以及处理命令，当个别文件改动后仅执行必要的处理，而不必重复整个编译过程，可以大大提高软件开发的效率。</p>





<h3>CMake和makefile</h3>
<p>Cmake是用来makefile的一个工具：读入所有源文件之后，自动生成makefile。</p>
————————————————
版权声明：本文为CSDN博主「AndrewZhou924」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
`
  },
]