function activate() {
    return {
        extendMarkdownIt(md) {
            return md;
        },
    };
}
exports.activate = activate;
