var cc = cc || {};
cc.resCfg = cc.resCfg || {};

/**
 * cc.resCfg[js.cocos2d_html5.a_js] = {ref : [], res : []}
 */

var resCfg = cc.resCfg;

//base for core module
resCfg["ccphysics"] = {
    ref : [
        js.ccphysics.CCPhysicsSprite_js,
        js.ccphysics.CCPhysicsDebugNode_js
    ]
};
