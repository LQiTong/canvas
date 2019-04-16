/** tree.js zyj 2018.4.22 */
(function (name) {
    var tree, outer, defaultDataFormat;
    // 对外的接口函数
    outer = {
        setData: setData,
    };
    // 默认格式化的数据
    defaultDataFormat = {
        unfold: true,
        name: 'name',
        childName: 'children'
    };
    /**
     * 用户自定义的格式化的数据
     * @param {*} dataFormat 格式化的规则 
     */
    function getDataFormat(dataFormat) {
        var index;
        if (!dataFormat) {
            return defaultDataFormat;
        }
        for (index in defaultDataFormat) {
            dataFormat[index] = typeof dataFormat[index] == 'undefined' ? defaultDataFormat[index] : dataFormat[index];
        }
        return dataFormat
    }
    /**
     * 初始化树形结构函数
     * @param {*} name 函数名
     */
    function initTreeJs(name) {
        var tree;
        if (checkTreeNameUsed(name)) { return; }
        window[name] = outer;
        initFoldIcon($('.tree'));
    }

    /**
     * 监听树形结构函数是否被调用
     * @param {*} name 函数名
     */
    function checkTreeNameUsed(name) {
        if (window[name]) {
            console.error("浏览器新增的内置对象 [" + name + "] 名字已被使用, tree.js 并没有被加载! 你可以尝试给词内置对象取另一个名字。");
            return true;
        }
        return false;
    }
    /**
     * 初始化折叠使用的图标
     * @param {*} target 目标 DOM元素
     */
    function initFoldIcon(target) {
        // 先将字体图标上的事件解绑，然后再绑定我们所需要的事件处理函数
        target.off('click', 'span>i.fa').on('click', 'span>i.fa', function (e) {
            var ele = $(e.target);
            if (ele.hasClass('fa-minus-circle')) {
                // 如果是 ‘-’ 图标，点击时换成 ‘+’ 图标，并且其父元素的兄弟元素 ‘ul’将在 0.5 秒内渐进式隐藏起来
                ele.removeClass('fa-minus-circle').addClass('fa-plus-circle').parent().next('ul').hide(500);
            } else if (ele.hasClass('fa-plus-circle')) {
                // 如果是 ‘+’ 图标，点击时换成 ‘-’ 图标，并且其父元素的兄弟元素 ‘ul’将在 0.5 秒内渐进式展示开来
                ele.removeClass('fa-plus-circle').addClass('fa-minus-circle').parent().next('ul').show(500);
            }
        })
    }
    /**
     * 获取本树形结构将要依附到的父节点
     * @param {String} selector DOM元素
     */
    function getJqueryObjectBySelector(selector) {
        var ele = $(selector);
        if (typeof selector != 'string') {
            console.error("第一个参数 [" + selector + "] 必须要是字符串类型!");
            return;
        }
        // 判断 .tree 这个 class 名是否存在，存在则就是此元素，不存在则在其子元素中查找 .tree 类名
        if (!ele.hasClass('tree')) {
            ele = ele.find('.tree');
        }
        if (ele.length != 1) {
            console.error("选择器 [" + selector + "] 要求有且只有一个!");
            return;
        }
        return ele;
    }
    /**
     * 对外的接口函数的方法
     * @param {string} selector 选择器 required
     * @param {JSON} data 数据 required
     * @param {Function} dataFormat 数据格式化
     */
    function setData(selector, data, dataFormat) {
        var ele = getJqueryObjectBySelector(selector);
        if (!ele) { return; }
        if (!data) { return; }
        if (!data.length) {
            data = [data];
        }
        dataFormat = getDataFormat(dataFormat);
        dataFormat.topElement = true;
        ele.empty().append(getTreeList(data, dataFormat));  // 清空再追加
        initFoldIcon(ele);
    }
    /**
     * 树形结构的数据处理方法
     * @param {json} data 数据 required
     * @param {Function} dataFormat 数据格式化
     */
    function getTreeList(data, dataFormat) {
        var i, single, name, children, childDataFormat,
            array = [];
        childDataFormat = dataFormat.child || dataFormat;   // 短路运算 前 true 抛前；反之抛后
        if (dataFormat.unfold) {
            array.push('<ul>');
        } else if (dataFormat.topElement) {
            dataFormat.topElement = false;
            array.push('<ul>');
        } else {
            array.push('<ul style="display:none;">');
        }
        for (i = 0; i < data.length; i++) {
            single = data[i];
            if (typeof dataFormat.name == 'function') {
                name = dataFormat.name(single);
            } else if (typeof dataFormat.name == 'string') {
                name = single[dataFormat.name];
            } else {
                name = single['name'];
            }
            if (typeof dataFormat.childName == 'string') {
                children = single[dataFormat.childName];
            } else {
                children = single['children'];
            }
            array.push('<li>');
            array.push('<span>');
            if (children && children.length > 0) {
                if (dataFormat.unfold) {
                    array.push('<i class="fa fa-minus-circle"></i>');
                } else {
                    array.push('<i class="fa fa-plus-circle"></i>');
                }
                array.push(name);
                array.push('</span>');
                array.push(getTreeList(children, childDataFormat));
            } else {
                array.push(name);
                array.push('</span>');
            }
            array.push('</li>');
        }
        array.push('</ul>');
        return array.join('');
    }

    initTreeJs(name);
}('tree'))