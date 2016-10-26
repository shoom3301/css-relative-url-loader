const path = require('path');
const loaderUtils = require('loader-utils');

module.exports = function (content) {
    this.cacheable();
    const query = loaderUtils.parseQuery(this.query);
    const prefix = query.prefix || '';

    if (!query.root) {
        throw new Error('shm-loader: root parameter is required!');
    }
    const relative = this.context.replace(query.root, '').substring(1);

    return content.replace(/url\([\'\"]?([^'"]+)[\'\"]?\)/g,
        (str, filePath) => `url('${prefix + path.join(relative, filePath)}')`.replace(/\\+/g, '/')
    );
};