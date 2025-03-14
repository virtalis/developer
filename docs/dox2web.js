$(document).ready(function() { 
  function highlightSect() { 
    var h = location.hash; 
    $('.highlighted').removeClass('highlighted panel-success').addClass('panel-info');
    $(h).removeClass('panel-info').addClass('highlighted panel-success'); 
    if(h) { $('span' + h).next().removeClass('panel-info').addClass('highlighted panel-success'); }
  } highlightSect();
  $('a').click(function() { setTimeout(highlightSect, 50); });
  $('.nav-pills a').click(function() { 
    $(this).tab('show'); return false;
  }); 
  $('.list-toggle').on('click', function() {
    $(this).toggleClass('fa-plus-square').toggleClass('fa-minus-square');
  }); 
  $('.split-bar').mousedown(function (e) { e.preventDefault();
    var min = 200; var max = 800; var mainmin = 200;
    $(document).mousemove(function (e) { e.preventDefault();
      var x = e.pageX - $('.sidebar').offset().left;
      if (x > min && x < max && e.pageX < ($(window).width() - mainmin)) { $('.sidebar').css('width', x); $('.main').css('margin-left', x+5); $('.split-bar').css('left', x); } }) });
    $(document).mouseup(function (e) { $(document).unbind('mousemove'); });
  function updateResultsVis(input) { var text = $(input).val(); if(text.length > 0) { $('#searchResults').show(); $('#searchResults').scrollTop(0); } else { $('#searchResults').hide(); } }
  function doSearch(input) { var text = $(input).val(); if(text.length > 0) { var options = { shouldSort: true, threshold: 0.2, location: 0, distance: 100, maxPatternLength: 32, minMatchCharLength: 1, keys: ['name', 'brief'] }; var fuse = new Fuse(list, options); var result = fuse.search(text); var selector = $('#searchResults > .list-group'); $(selector).empty(); var len = result.length; if(len > 0) { for(var i = 0; i < len; i++) { $(selector).append('<a href="' + result[i].ref + '" class="list-group-item"><h4 class="list-group-item-heading">' + result[i].name + '</h4><p class="list-group-item-text">' + result[i].brief + '</p></a>'); } } else { $(selector).append('<p class="list-group-item">No Results</p>'); } } }
  $('#srch-term').on('input', function() { doSearch(this); updateResultsVis(this); });
  $('#srch-term').on('focus', function() { updateResultsVis(this); });
  $('#docs-search').submit(function() { return false; });
  $(window).resize(checkSize); checkSize();
  document.body.addEventListener('click', function(e) {
    var target = e.target || e.srcElement;
    var content_area = document.getElementById('searchResults');
    var input = document.getElementById('srch-term');
    if (target !== content_area && target !== input && !isChildOf(target, content_area)) { $('#searchResults').hide(); }
  }, false);
  function isChildOf(child, parent) { if (child.parentNode === parent) { return true; } else if (child.parentNode === null) { return false; } else { return isChildOf(child.parentNode, parent); } }
  function checkSize() { if($('.navbar-collapse').css('display') == 'none') $('#searchResults').hide(); }
  $.fn.collapse.Constructor.TRANSITION_DURATION = 0;
  var list = [
    {
      name: 'down',
      brief: '',
    ref: 'class_meta___coloured_label_style_1_1_label_style_upgrader.html#1a2429387ef552d5e728e4403a73e7a12c'
    },
    {
      name: 'downgradeNode',
      brief: '',
    ref: 'class_meta___coloured_label_style_1_1_label_style_upgrader.html#1a5dcfade18d852be0c6b1e5bdbbf0f360'
    },
    {
      name: 'upgradeNode',
      brief: '',
    ref: 'class_meta___coloured_label_style_1_1_label_style_upgrader.html#1a614f25d0365bcf0cde1f5bb9246cad00'
    },
    {
      name: 'up',
      brief: '',
    ref: 'class_meta___coloured_label_style_1_1_label_style_upgrader.html#1a8b4e82dd416536e3584b4b7a13180a96'
    },
    {
      name: 'NodeChildRemoved',
      brief: '',
    ref: 'classvrtree__cpp_1_1_node_manager.html#1a0590e67e37ef60a2db324c1e254ac674'
    },
    {
      name: 'Update',
      brief: '',
    ref: 'classvrtree__cpp_1_1_node_manager.html#1a09ec92a8367936efdcf01cfca88a119f'
    },
    {
      name: 'registerObserver',
      brief: 'Registers a class implementing static observer functions as an observer of the specified metanode',
    ref: 'classvrtree__cpp_1_1_node_manager.html#1a0f016fc661945602448da08e718be0b8'
    },
    {
      name: 'nodeChildRemoved',
      brief: '',
    ref: 'classvrtree__cpp_1_1_node_manager.html#1a268b65dc4a290574686bec59dce9ac1c'
    },
    {
      name: 'update',
      brief: '',
    ref: 'classvrtree__cpp_1_1_node_manager.html#1a286081096b6a54e7bd46f88c96b19087'
    },
    {
      name: 'NodeValuesChanged',
      brief: '',
    ref: 'classvrtree__cpp_1_1_node_manager.html#1a2fef83b790b100414fa8725403e8bcec'
    },
    {
      name: 'NodeCreated',
      brief: '',
    ref: 'classvrtree__cpp_1_1_node_manager.html#1a3110e26f883247545215343a5812df0d'
    },
    {
      name: 'registerUpdateable',
      brief: '',
    ref: 'classvrtree__cpp_1_1_node_manager.html#1a32c2bf673e6427a9f7b7e2d6bb9091dc'
    },
    {
      name: 'unRegisterObserver',
      brief: 'Unregisters a class implementing static observer functions as an observer of the specified metanode',
    ref: 'classvrtree__cpp_1_1_node_manager.html#1a57623e273f4584861c6b73e03c862de9'
    },
    {
      name: 'unRegisterUpdateable',
      brief: '',
    ref: 'classvrtree__cpp_1_1_node_manager.html#1a5b9327701ace13985875f9183c8a80f5'
    },
    {
      name: 'nodeChildAdded',
      brief: '',
    ref: 'classvrtree__cpp_1_1_node_manager.html#1a5d75e526aad0dbfab45105e681eda843'
    },
    {
      name: 'NodeDestroying',
      brief: '',
    ref: 'classvrtree__cpp_1_1_node_manager.html#1a8888057af9fe9462932a532b5cc40ab6'
    },
    {
      name: 'nodeDestroying',
      brief: '',
    ref: 'classvrtree__cpp_1_1_node_manager.html#1aabb2a89d735d06d5a06a61640db9a1e1'
    },
    {
      name: 'nodeValuesChanged',
      brief: '',
    ref: 'classvrtree__cpp_1_1_node_manager.html#1ac1b32e1acdcc4f880155afb5c210f4ea'
    },
    {
      name: 'NodeChildAdded',
      brief: '',
    ref: 'classvrtree__cpp_1_1_node_manager.html#1ae483696b25ecfebb1e051437133af02b'
    },
    {
      name: 'nodeCreated',
      brief: '',
    ref: 'classvrtree__cpp_1_1_node_manager.html#1af18485317f91d034883cec5f851e06ad'
    },
    {
      name: 'NodeRenamed',
      brief: '',
    ref: 'classvrtree__cpp_1_1_node_manager.html#1af934cf225660d45241ddaf2cc046245c'
    },
    {
      name: 'NodeParentChanged',
      brief: '',
    ref: 'classvrtree__cpp_1_1_node_manager.html#1afde356db476aaaa5332bf79dc1ec75d1'
    },
    {
      name: 'nodeParentChanged',
      brief: '',
    ref: 'classvrtree__cpp_1_1_node_manager.html#1afe25a2057fc8949115992c37a63b04cb'
    },
    {
      name: 'nodeRenamed',
      brief: '',
    ref: 'classvrtree__cpp_1_1_node_manager.html#1afebfb823f49dbdcdda968bf9e2ec40f6'
    },
    {
      name: 'BUILDFILTER_ALLOW_INVALID_ATTRIBS',
      brief: 'Signals that the loader should continue even if it encounters properties that it does not understand',
    ref: 'group__api__builder__flags.html#1ga13a692e4c6b706f6ed696aaefd902f8a'
    },
    {
      name: 'BUILDFILTER_MERGE_ALL',
      brief: 'Signals that the load operation should merge all nodes by UUID where possible',
    ref: 'group__api__builder__flags.html#1gaa3cd2f232304365033a6f1d5c24c2ebb'
    },
    {
      name: 'BUILDFILTER_ALLOW_MISSING_ATTRIBS',
      brief: 'Signals that the load operation should populate property values with defaults when the value does not exist in the file',
    ref: 'group__api__builder__flags.html#1gab045d7c24808802a5581730bf7ca8e9b'
    },
    {
      name: 'BUILDFILTER_ALLOW_MISSING_METANODES',
      brief: 'Signals that the loader should continue even if it encounters node types that it does not understand',
    ref: 'group__api__builder__flags.html#1gaea993726c0d826871d83837c30de47c3'
    },
    {
      name: 'BUILDFILTER_MERGE_ROOTS',
      brief: 'Signals that the load operation should merge the standard root nodes ',
    ref: 'group__api__builder__flags.html#1gaf81af30aa64ffa43eff1c1a793bf269f'
    },
    {
      name: 'VRRequestSecurityContext',
      brief: 'Requests a change in the API security context to grant access to API functions by categories specified in the auth string',
    ref: 'group__api__core.html#1ga03f96ca9bcc6c65d2a85f9db9da45ab2'
    },
    {
      name: 'VRGetNodeFromUUID',
      brief: 'Gets the node with the specified UUID',
    ref: 'group__api__core.html#1ga1784e60f50a50a11bfbef893e267121c'
    },
    {
      name: 'VRIsNodeHandleValid',
      brief: 'Checks if a node handle is valid',
    ref: 'group__api__core.html#1ga180a2146c62e4cdd9fafbe13298fe9ec'
    },
    {
      name: 'VRCloseUserSlotHandle',
      brief: 'Releases a unique userdata slot handle',
    ref: 'group__api__core.html#1ga1ae7f460a17b3700fc9f7bee91996cd5'
    },
    {
      name: 'VRCopyNodeHandle',
      brief: 'Creates a new node handle based off the old one',
    ref: 'group__api__core.html#1ga1c1408fac4fac3aca66c8d1980502ce6'
    },
    {
      name: 'VRBulkData',
      brief: 'Specifies if there a large amount of data pending transfer between vrtree instances',
    ref: 'group__api__core.html#1ga1e8f1a563947853c92ed8ddd76bc0b6f'
    },
    {
      name: 'VRGetUUIDHigh',
      brief: 'Gets the high 64-bits of a node\'s unique ID',
    ref: 'group__api__core.html#1ga22ea87c3e8559f8a6aa8438fef2cd789'
    },
    {
      name: 'VRGetAPIVersionMajor',
      brief: 'Gets the VRTree API Major version',
    ref: 'group__api__core.html#1ga2342cd4111b8dffcd6e9d475fb8f7915'
    },
    {
      name: 'VRGetLastErrorString',
      brief: 'Gets the last error string',
    ref: 'group__api__core.html#1ga3c7934c3c7f1f3da0b61cc8c706e332b'
    },
    {
      name: 'VRSetAPIErrorLevel',
      brief: 'Sets the API error level, which controls which types of errors are reported and logged',
    ref: 'group__api__core.html#1ga40598bfd7cd8ed1ff53231758dfd11d7'
    },
    {
      name: 'VRNewUserSlotHandle',
      brief: 'Requests a unique userdata slot identifier',
    ref: 'group__api__core.html#1ga4677c81bcabcb539230de4cee70ff8e2'
    },
    {
      name: 'VRInit',
      brief: 'Initialise VRTree',
    ref: 'group__api__core.html#1ga545cfc3b9c39afef18996cb9a0d148ea'
    },
    {
      name: 'VRCloseNodeHandle',
      brief: 'Closes a node handle, clearing its connection to VRTree',
    ref: 'group__api__core.html#1ga70087e0f0a2b5628aa0562ca9122a70d'
    },
    {
      name: 'VRSetImmediateErrorLog',
      brief: 'Specifies that errors tracked by VRSetAPIErrorLevel are also logged the the application log immediately rather than only being stored for VRGetLastErrorString',
    ref: 'group__api__core.html#1ga929eb55dbf5b3d4ee155e950b6aae38f'
    },
    {
      name: 'VRShutdown',
      brief: 'Disconnect from the network and shut down',
    ref: 'group__api__core.html#1gaa2ce2a7109327b311ff55a8407e871ee'
    },
    {
      name: 'VRGetUUIDLow',
      brief: 'Gets the low 64-bits of a node\'s unique ID',
    ref: 'group__api__core.html#1gaa2da4548a9066ddced1b385c61926a19'
    },
    {
      name: 'VRCloseSecurityContext',
      brief: 'Releases a previously requested security context',
    ref: 'group__api__core.html#1gabcfd76b75efc44e0d62068eb996aa56d'
    },
    {
      name: 'VRGetNodeVersion',
      brief: 'Gets the metanode version of the specified node',
    ref: 'group__api__core.html#1gac83b8415dad9c77ac93a8d6dda59a8a1'
    },
    {
      name: 'VRConnect',
      brief: 'Connect to another instance of VRTree ',
    ref: 'group__api__core.html#1gae309125ad9f6e8281f334c06b3eb60c1'
    },
    {
      name: 'VRUpdate',
      brief: 'Perform a full update, notifying observers and updating actors',
    ref: 'group__api__core.html#1gaebaa1a12a50deea7ba81f7f6f1bafccf'
    },
    {
      name: 'VRClearLastError',
      brief: 'Manually clear the last error code',
    ref: 'group__api__core.html#1gaeee8aa8188037e07da728ca2eccb2f98'
    },
    {
      name: 'VRCountOpenNodeHandles',
      brief: 'Diagnostic function',
    ref: 'group__api__core.html#1gaf451e3eda0d2153ace2e2c0ed2fdef99'
    },
    {
      name: 'VRGetAPIVersionMinor',
      brief: 'Gets the VRTree API Minor version',
    ref: 'group__api__core.html#1gafe92017c417aa68147cd3eb8161ee008'
    },
    {
      name: 'VRGetLastError',
      brief: 'Gets the last error code',
    ref: 'group__api__core.html#1gaffc08d2d7d77f5c58ec51c1267105904'
    },
    {
      name: 'VRTREE_API_INVALID_PROPERTY',
      brief: 'API function expected a valid property name/index',
    ref: 'group__api__errors.html#1ga1fde9a7f1f4ed892aeb9d9605847d910'
    },
    {
      name: 'VRTREE_API_NOT_ALLOWED',
      brief: 'API function attempted to do something inherently forbidden',
    ref: 'group__api__errors.html#1ga2189c9e9332b8a29f87837335a9d5f49'
    },
    {
      name: 'VRTREE_API_INVALID_PARAMETER',
      brief: 'API function expected a valid parameter ',
    ref: 'group__api__errors.html#1ga618c4b1f551ffc62f473934713a3b20d'
    },
    {
      name: 'VRTREE_API_INVALID_HANDLE',
      brief: 'API function expected a valid object handle',
    ref: 'group__api__errors.html#1ga76a6662b4f89a04640a1332b2aeba451'
    },
    {
      name: 'VRTREE_API_OK',
      brief: 'No error - operation succeeded',
    ref: 'group__api__errors.html#1gaa6698acd7a071095c5e45216e3889a12'
    },
    {
      name: 'VRTREE_API_MISSING_MIGRATIONS',
      brief: 'API function attempted to perform migrations but some are missing',
    ref: 'group__api__errors.html#1gac4a54060394ea603b0c7cdb6c1996b44'
    },
    {
      name: 'VRTREE_API_INVALID_SECURITYCONTEXT',
      brief: 'API function was called without adequate permissions',
    ref: 'group__api__errors.html#1gad6ca302d7be7f0ba8fff6500121c057c'
    },
    {
      name: 'VRTREE_API_INVALID_METANODE',
      brief: 'API function expected a valid metanode name/handle',
    ref: 'group__api__errors.html#1gad86be98d834245b7499b0e6667e528aa'
    },
    {
      name: 'VRXGetAPIVersionMajor',
      brief: 'Gets the VRExchange API Major version',
    ref: 'group__api__exchange.html#1ga47898599e32aef7c4b293d45295d27d8'
    },
    {
      name: 'VRXImport',
      brief: 'Imports the specified file onto the specified scenes and libraries nodes',
    ref: 'group__api__exchange.html#1ga5581916c1638011dec91ac061a5a0138'
    },
    {
      name: 'VRXGetAPIVersionMinor',
      brief: 'Gets the VRExchange API Minor version',
    ref: 'group__api__exchange.html#1gae996fceb9d6040b90422f9a034099eae'
    },
    {
      name: 'VRXImportAndMerge',
      brief: 'Imports and merges the specified file onto the specified scenes and libraries nodes utilising the merge options to append the import data',
    ref: 'group__api__exchange.html#1gaf3165463532c03cf30e95b29d246b722'
    },
    {
      name: 'VRXExport',
      brief: 'Saves the specified scenes and libraries nodes to the specified file',
    ref: 'group__api__exchange.html#1gaf702470c055c9b28eb9d045c7e367b1b'
    },
    {
      name: 'VRFFIGetDouble',
      brief: 'Reads the double value contained in the FFI variable and returns it',
    ref: 'group__api__ffi.html#1ga100d7a955f2b8421edef0c540c4275b6'
    },
    {
      name: 'VRFFIFree',
      brief: 'Deletes the memory allocated for this FFI variable and closes the handle',
    ref: 'group__api__ffi.html#1ga1810c998908863c388650e0296f77b73'
    },
    {
      name: 'VRFFIMakeBool',
      brief: 'Creates a boolean FFI variable and returns it',
    ref: 'group__api__ffi.html#1ga1c2a324173c139bec2fb4f1bb334bc33'
    },
    {
      name: 'VRFFIMakeVec2',
      brief: 'Creates a vec2 ',
    ref: 'group__api__ffi.html#1ga1ce1d8d25f00097654c06819c0e618b5'
    },
    {
      name: 'VRFFIGetVec4',
      brief: 'Reads the vec4 contained in the FFI variable and returns it',
    ref: 'group__api__ffi.html#1ga20b5a2bf51323eee485f199ca4213c16'
    },
    {
      name: 'VRFFIGetMat3',
      brief: 'Reads the mat3 contained in the FFI variable and returns it',
    ref: 'group__api__ffi.html#1ga246651767ee85021eed3cf3debdfabe0'
    },
    {
      name: 'VRFFIMakeAABB',
      brief: 'Creates an AABB ',
    ref: 'group__api__ffi.html#1ga2b16dadde81ef79a1cfa95fb0122969f'
    },
    {
      name: 'VRFFIGetEventRegister',
      brief: 'Reads the value from an event register during a call to a registered event function',
    ref: 'group__api__ffi.html#1ga307c16c5b0038f59dc86c4ce86dd0da4'
    },
    {
      name: 'VRFFIMakePlane',
      brief: 'Creates a plane ',
    ref: 'group__api__ffi.html#1ga3b891506e5c1fa1c6ae987e28da0399c'
    },
    {
      name: 'VRFFIGetBool',
      brief: 'Reads the boolean value contained in the FFI variable and returns it',
    ref: 'group__api__ffi.html#1ga3c796ef19ee3be2fb1ff9ade390be284'
    },
    {
      name: 'VRFFIMakeInt',
      brief: 'Creates a number FFI variable and returns it',
    ref: 'group__api__ffi.html#1ga3e1a6b13f76928f360329a3a26b56ad6'
    },
    {
      name: 'VRFFIMakeString',
      brief: 'Creates a string FFI variable and returns it',
    ref: 'group__api__ffi.html#1ga4bb32fa94f2bf09ad03d04e064098106'
    },
    {
      name: 'VRFFIGetPlane',
      brief: 'Reads the plane contained in the FFI variable and returns it',
    ref: 'group__api__ffi.html#1ga52568958e2c08f3ab34196490cfcda84'
    },
    {
      name: 'VRRegisterEventFunction',
      brief: 'Registers a C function with a name which can then be used to call the function in direct response to an Event ',
    ref: 'group__api__ffi.html#1ga57a5688399ee7d5a9711b515f3a247f4'
    },
    {
      name: 'VRFFIMakeSphere',
      brief: 'Creates a sphere ',
    ref: 'group__api__ffi.html#1ga57b1c2df842749dacc3c771ad4d07a8b'
    },
    {
      name: 'VRFFIMakeDouble',
      brief: 'Creates a number FFI variable and returns it',
    ref: 'group__api__ffi.html#1ga5f70b24736b0e61ede3ec29b5690b2d2'
    },
    {
      name: 'VRFFIMakeVec4',
      brief: 'Creates a vec4 ',
    ref: 'group__api__ffi.html#1ga6a6e9515c25f0ce4e3a9653261d9a3c2'
    },
    {
      name: 'VRFFIInvoke',
      brief: 'Calls a named function in the scripting environment',
    ref: 'group__api__ffi.html#1ga8436624aacf55852418299a0e917f1bb'
    },
    {
      name: 'VRFFIGetRay',
      brief: 'Reads the ray contained in the FFI variable and returns it',
    ref: 'group__api__ffi.html#1ga858320f315fc02f9d5c8376434b5a978'
    },
    {
      name: 'VRFFIMakeNode',
      brief: 'Wraps a node handle in an FFI variable',
    ref: 'group__api__ffi.html#1ga9057924dfb7ff9864e677fdbb99fb70d'
    },
    {
      name: 'VRFFIGetSphere',
      brief: 'Reads the sphere contained in the FFI variable and returns it',
    ref: 'group__api__ffi.html#1gaa7c8b8ae6bf93915a95c6a2b8c04372e'
    },
    {
      name: 'VRFFIRegister',
      brief: 'Registers a function as a global Lua function in the main script environment',
    ref: 'group__api__ffi.html#1gaa9a6151f02087461aa2066e64aab013f'
    },
    {
      name: 'VRFFIUnregister',
      brief: 'Unregisters a previously registered FFIFunc',
    ref: 'group__api__ffi.html#1gaac0c19171c6edcc54f95dc5b67d6b451'
    },
    {
      name: 'VRFFIGetVec2',
      brief: 'Reads the vec2 contained in the FFI variable and returns it',
    ref: 'group__api__ffi.html#1gab726886c73cafc319ca3fe83493799c1'
    },
    {
      name: 'VRFFIGetVec3',
      brief: 'Reads the vec3 contained in the FFI variable and returns it',
    ref: 'group__api__ffi.html#1gab7eaf115d4942926fc1baa3f730710d6'
    },
    {
      name: 'VRFFIGetQuat',
      brief: 'Reads the quaternion contained in the FFI variable and returns it',
    ref: 'group__api__ffi.html#1gac9904878881b21079fc60dc19604381d'
    },
    {
      name: 'VRFFIMakeRay',
      brief: 'Creates a ray ',
    ref: 'group__api__ffi.html#1gad277901429144d95dd0336dc21b2c2e2'
    },
    {
      name: 'VRFFIGetNode',
      brief: 'Reads the node contained in the FFI variable and returns a new handle to it',
    ref: 'group__api__ffi.html#1gadb8b9b65bbefd3454970a42f1e864b35'
    },
    {
      name: 'VRFFIMakeMat3',
      brief: 'Creates a mat3 ',
    ref: 'group__api__ffi.html#1gadf1f590c29378e09888fe59303ba49c4'
    },
    {
      name: 'VRFFIGetString',
      brief: 'Reads the string value contained in the FFI variable and returns it',
    ref: 'group__api__ffi.html#1gae4c3aeff1b3a6139b916b1cac6d34d6d'
    },
    {
      name: 'VRFFIMakeMat4',
      brief: 'Creates a mat4 ',
    ref: 'group__api__ffi.html#1gae5152969ecf78d6fa01a41ccef710824'
    },
    {
      name: 'VRFFIMakeQuat',
      brief: 'Creates a quaternion ',
    ref: 'group__api__ffi.html#1gae5a7bd3802be1bdcbe3941bac1bc6043'
    },
    {
      name: 'VRFFIGetInt',
      brief: 'Reads the integer value contained in the FFI variable and returns it',
    ref: 'group__api__ffi.html#1gaecd9d5ba0b2f824b43358b13debe232d'
    },
    {
      name: 'VRFFIGetMat4',
      brief: 'Reads the mat4 contained in the FFI variable and returns it',
    ref: 'group__api__ffi.html#1gaf0716aea49d9c17926d8e74d28640c81'
    },
    {
      name: 'VRFFIGetAABB',
      brief: 'Reads the AABB contained in the FFI variable and returns it',
    ref: 'group__api__ffi.html#1gaf7c09c8a20208d161aa48c2f74b36cb5'
    },
    {
      name: 'VRUnregisterEventFunction',
      brief: 'Unregisters a previously registered event function',
    ref: 'group__api__ffi.html#1gaf838ff507b395a66ff30f46db13f9153'
    },
    {
      name: 'VRFFIMakeVec3',
      brief: 'Creates a vec3 ',
    ref: 'group__api__ffi.html#1gafb1d38a8a41eaf91f9f7975a4d46a1e6'
    },
    {
      name: 'VRFFIGetType',
      brief: 'Identifies the type of variable',
    ref: 'group__api__ffi.html#1gaff1708647cb8fb03348d63405aa2d9a4'
    },
    {
      name: 'METANODE_TRANSIENT',
      brief: 'Used for event MetaNodes and similar',
    ref: 'group__api__flags.html#1ga1b2088be14558836577a0737115d3653'
    },
    {
      name: 'METANODE_PROTECTED',
      brief: 'Specifies that a metanode or specific node instance is protected from all user and script operations that would affect its position in the tree ',
    ref: 'group__api__flags.html#1ga301d56d7d25fd8de1e47251a919e2db0'
    },
    {
      name: 'PROPERTY_INVALID_INDEX',
      brief: 'Identifier of an invalid property index',
    ref: 'group__api__flags.html#1ga36134a3890fa19d961a9bb78bf60a223'
    },
    {
      name: 'METANODE_NO_CLONE',
      brief: 'Specifies that a metanode or specific node instance should not be copy-able by the application',
    ref: 'group__api__flags.html#1ga38b131d36a804469c9b0b5ea30ba8e2f'
    },
    {
      name: 'METANODE_NO_SAVE',
      brief: 'Specifies that a metanode or specific node instance should not be saved into a scene',
    ref: 'group__api__flags.html#1ga5191381dc6b89130dd99f5058601ad4d'
    },
    {
      name: 'METANODE_DEVELOPER_NO_SAVE',
      brief: 'Specifies that a metanode or specific node instance should not be saved anywhere, including special system-save operations',
    ref: 'group__api__flags.html#1ga688c1f3076c941e8c88d3ce81b8b4f7e'
    },
    {
      name: 'METANODE_ADMIN',
      brief: 'Indicates that the metanode should only be represented in the 2D drawing system when in developer admin mode',
    ref: 'group__api__flags.html#1ga719ee85c835d5f8384565004ef2f273f'
    },
    {
      name: 'METANODE_CHILD_MAP',
      brief: 'Specifies that a metanode or specific node instance should use a map for its children ',
    ref: 'group__api__flags.html#1ga7cb1d5588ee0f63d5a1831c17f8a5395'
    },
    {
      name: 'METANODE_NO_HISTORY',
      brief: 'Specifies that a metanode or specific node instance should not be inserted into the undo/redo history',
    ref: 'group__api__flags.html#1gad792fac7f43be5c1175d1f17bf227022'
    },
    {
      name: 'FLAG_VALUE_BY_POST',
      brief: 'Specifies that the value being set should not be applied to the node until the next frame update',
    ref: 'group__api__flags.html#1gaefa0b1ec4c7b51dbf3ce64895190fbfa'
    },
    {
      name: 'METANODE_NODE_SPY',
      brief: 'Specifies that a metanode or specific node instance should be treated as node-spy, which triggers its dirty flags when any of its descendants are modified',
    ref: 'group__api__flags.html#1gaf10bd03296002b45be60f9a72ceaebcc'
    },
    {
      name: 'METANODE_NO_GUI',
      brief: 'Indicates that an application should not attempt to represent this node in whatever 2D drawing system it is using',
    ref: 'group__api__flags.html#1gafcc57159e4cc44a409e657180e8c7569'
    },
    {
      name: 'FILEIO_NEW_UUIDS',
      brief: 'Signals that the file IO should not preserve the Node UUID\'s',
    ref: 'group__api__io__flags.html#1ga274f605b44fe99cffe506a92c5d05e37'
    },
    {
      name: 'FILEIO_FILE_FORMAT_HUMAN',
      brief: 'Signals that the file should be saved/loaded as a VRText file',
    ref: 'group__api__io__flags.html#1ga2e54af6d644c6e28d62bd70358948b55'
    },
    {
      name: 'FILEIO_CHANGED_ONLY',
      brief: 'Signals the file IO to only output Libraries that are changed',
    ref: 'group__api__io__flags.html#1ga2e7aa5129f313dab6d2a20406c583e1a'
    },
    {
      name: 'FILEIO_UUIDS_MUST_EXIST',
      brief: 'Signals that the file IO should throw an exception if the file being loaded does not have UUID\'s',
    ref: 'group__api__io__flags.html#1ga4465ac278c2c60bc8869221c43035b0c'
    },
    {
      name: 'FILEIO_SAVE_SIBLINGS_TOO',
      brief: 'Signals that the nodes siblings should be saved',
    ref: 'group__api__io__flags.html#1ga53d8e9324569e59194fa2cad7413c360'
    },
    {
      name: 'FILEIO_IGNORE_UNSAVED_PROPERTIES',
      brief: 'Signals that values of properties that aren\'t saved should be ignored when loading',
    ref: 'group__api__io__flags.html#1ga6f21ebd6730c823724a3bdee851faef5'
    },
    {
      name: 'FILEIO_FILE_FORMAT_GUESS',
      brief: 'Signals that the save/load operation should determine the file format from the file extension',
    ref: 'group__api__io__flags.html#1ga86c20535b63833c7f27ad13c53607ce1'
    },
    {
      name: 'FILEIO_OVERLAY_DOCUMENT',
      brief: 'Signals that the document should be saved as a system document',
    ref: 'group__api__io__flags.html#1ga9aea06ff4ff6badeebb753ed66615e99'
    },
    {
      name: 'FILEIO_FORCE_SAVE',
      brief: 'Signals the file IO that we should override the NO_SAVE flag and save anyways',
    ref: 'group__api__io__flags.html#1gaa0cc96fa2194ee7b7795750cc4e370e5'
    },
    {
      name: 'FILEIO_SYSTEM_DOCUMENT',
      brief: 'Signals that the document should be saved as a system document',
    ref: 'group__api__io__flags.html#1gaa78b53c433412e5e33b8e123d370ba15'
    },
    {
      name: 'FILEIO_NESTED',
      brief: 'Signals the file IO that this call to loadTree',
    ref: 'group__api__io__flags.html#1gac3a1dbf33427a2674c45cf22f13fc074'
    },
    {
      name: 'FILEIO_MONOLITHIC',
      brief: 'Signals that Library nodes\' archive flag should be ignored',
    ref: 'group__api__io__flags.html#1gad3fb26bbca8172f2c006bdd390659d92'
    },
    {
      name: 'FILEIO_FILE_FORMAT_MACHINE',
      brief: 'Signals that the files should be saved/loaded as a VRNative file',
    ref: 'group__api__io__flags.html#1gae23d8cb421d9a0527e6d0cfde11d0ebd'
    },
    {
      name: 'FILEIO_MERGE',
      brief: 'Signals the file IO that this call to loadTree',
    ref: 'group__api__io__flags.html#1gae96ff8c6e852c7ae50233ec39ebb66c1'
    },
    {
      name: 'VRTREE_ERRORLEVEL_INFO',
      brief: 'Record info messages',
    ref: 'group__api__loggingmask.html#1ga1f91bb412a87e3b09179879390224bb5'
    },
    {
      name: 'VRTREE_ERRORLEVEL_DEBUG',
      brief: 'Record debug messages',
    ref: 'group__api__loggingmask.html#1gaa969e2e71bec05262bda8d0b0396282e'
    },
    {
      name: 'VRTREE_ERRORLEVEL_ERRORS',
      brief: 'Record critial errors',
    ref: 'group__api__loggingmask.html#1gab41927dc58418c40b906b930632f4016'
    },
    {
      name: 'VRTREE_ERRORLEVEL_NONE',
      brief: 'Do not set any internal error codes nor generate any messages',
    ref: 'group__api__loggingmask.html#1gacb000b723a66c16a89f286ebe7aed751'
    },
    {
      name: 'VRTREE_ERRORLEVEL_WARNINGS',
      brief: 'Record warnings',
    ref: 'group__api__loggingmask.html#1gaf2d4f564505c1e15e89bef5e763a7a78'
    },
    {
      name: 'vrAddToolbarButton',
      brief: 'Adds a button to a toolbar dock group',
    ref: 'group__api__lua.html#1ga01c70b58199656a257ab34696afbd481'
    },
    {
      name: 'vrScriptEditorAppendText',
      brief: 'Inserts text into the currently visible script editor tab and advances the insert cursor position',
    ref: 'group__api__lua.html#1ga01e61cb2083ff299559ac7c7b7940e79'
    },
    {
      name: 'vrAddPropertyArrayFloat',
      brief: 'Adds a new float array property to an unfinished metanode',
    ref: 'group__api__lua.html#1ga0214b65c471d48e639d383c7132ac1d1'
    },
    {
      name: 'vrAddPropertyBool',
      brief: 'Adds a new boolean property to an unfinished metanode',
    ref: 'group__api__lua.html#1ga030a19ff32f636ee842bd5e1ae0c7ea7'
    },
    {
      name: 'vrNodeGetLocalTransform',
      brief: 'DEPRECATED',
    ref: 'group__api__lua.html#1ga03640d9a878c60af717f86926fd0f9c3'
    },
    {
      name: 'vrIsVR4CAD',
      brief: 'DEPRECATED',
    ref: 'group__api__lua.html#1ga038b46ec7c9b74b7ade1647e9e037035'
    },
    {
      name: 'vrClusterPopupScriptWindow',
      brief: 'DEPRECATED - use vrShowScriptWindow',
    ref: 'group__api__lua.html#1ga0598b8e8b8957b7e40a9f551fe7e2460'
    },
    {
      name: 'vrBodyFlyToFitBounds',
      brief: 'Flies the body to a position where it can see the whole of node, over time seconds',
    ref: 'group__api__lua.html#1ga05adff7fced2c6cf29f93e65aa7b34c1'
    },
    {
      name: 'vrScriptEditorSelectWord',
      brief: 'Selects the word surrounding the current insertion point in the currently visible script editor tab',
    ref: 'group__api__lua.html#1ga06cf3887cdd8f4a9e09a30678641fbcf'
    },
    {
      name: 'vrLoadGalleryFolders',
      brief: 'Add sub-folders of the specified folder to the gallery',
    ref: 'group__api__lua.html#1ga0719e286ca1e6db2e8c226e96e8b7161'
    },
    {
      name: 'vrCopyToClipboard',
      brief: 'Copies the specified node to the clipboard',
    ref: 'group__api__lua.html#1ga076e6a289e86cef4361883dfbfd944b1'
    },
    {
      name: 'vrMatTranspose',
      brief: 'Returns the tranpose of a 3x3 matrix, or a 4x4 matrix with the 3x3 component transposed',
    ref: 'group__api__lua.html#1ga0796f80e03629b2f1ecdcf47a04f10f7'
    },
    {
      name: 'vrRemoveRecentItem',
      brief: 'Removes a recent file, folder or import from the corresponding list',
    ref: 'group__api__lua.html#1ga0812e49067febb2d62abe2bd4b0d4eeb'
    },
    {
      name: 'vrNodeSetLocalScaleY',
      brief: 'Sets the local y scale of the node',
    ref: 'group__api__lua.html#1ga08ab972fc5c097bf8adfa4f7d71ee668'
    },
    {
      name: 'vrEnableNodeWhenOculusTouchAvailable',
      brief: 'Makes a button available when an Oculus Touch is connected',
    ref: 'group__api__lua.html#1ga0930d0b026e7ebd466b1a9c76eca8252'
    },
    {
      name: 'vrTreeControlSelect',
      brief: 'Selects ',
    ref: 'group__api__lua.html#1ga09a3ec8c2fdeff864df1196a38c8910a'
    },
    {
      name: 'vrAddPropertyVec3d',
      brief: 'Adds a new vec3d property to an unfinished metanode',
    ref: 'group__api__lua.html#1ga0a724115ab39284635d285bb94eb9d24'
    },
    {
      name: 'vrScriptEditorSetCurrentLine',
      brief: 'Set the cursor at the start of the specified line in the currently visible script editor tab',
    ref: 'group__api__lua.html#1ga0d9f5cb5083bc75309e6c305e4ac2585'
    },
    {
      name: 'vrGrabObjectWithTrackedHand',
      brief: 'Attaches a target node to the hand',
    ref: 'group__api__lua.html#1ga0e7e7fcd9b4da6371c02e199519a27ba'
    },
    {
      name: 'vrGetTrackedEyeNode',
      brief: 'Gets the current tracked eye node',
    ref: 'group__api__lua.html#1ga0f124db6210a6a7787906dc18c816b07'
    },
    {
      name: 'vrProgressYield',
      brief: 'Updates the progress display',
    ref: 'group__api__lua.html#1ga10d407de2a3ed1449e79db9f9593eb80'
    },
    {
      name: 'vrAddPropertyVectorBool',
      brief: 'Adds a new boolean vector property to an unfinished metanode',
    ref: 'group__api__lua.html#1ga10f8bc93a8ce02ae7fe3cdc7207e4335'
    },
    {
      name: 'vrAddGlobalEventObserver',
      brief: 'Adds an observer and callback function to execute for global events ',
    ref: 'group__api__lua.html#1ga11b458665b1b68b97a3aeebf5164eafe'
    },
    {
      name: 'vrSetAppQuitHook',
      brief: 'Specify a lua function to be called when user tries to quit the application',
    ref: 'group__api__lua.html#1ga11c97de1ddb945e99012166a1e0f79da'
    },
    {
      name: 'vrToggleNotebookPane',
      brief: 'If the current pane is visible it will be hidden, if it\'s hidden it will be made visible ',
    ref: 'group__api__lua.html#1ga11d5d0a2db19d742d57cf26398ee0436'
    },
    {
      name: 'vrDeleteChildren',
      brief: 'Deletes the children of a node',
    ref: 'group__api__lua.html#1ga1255144c6204d47156ecce3c1bd276ee'
    },
    {
      name: 'vrCreateGradient',
      brief: 'Creates a new gradient',
    ref: 'group__api__lua.html#1ga1255c9a87a0628225ed07792e4fce397'
    },
    {
      name: 'vrSetTrackedHandNode',
      brief: 'Sets the tracked hand to the specified node',
    ref: 'group__api__lua.html#1ga13a89adb4c0a885d46ffd918e093df37'
    },
    {
      name: 'vrNodeSetScaleX',
      brief: 'Sets the world x scale of the node',
    ref: 'group__api__lua.html#1ga145f69ec19c43c139bd0fe389f6cf180'
    },
    {
      name: 'vrBodyAddImpulseMouse',
      brief: 'Moves the camera by simulating mouse movement',
    ref: 'group__api__lua.html#1ga15046bae5f4cb6d534df8268bdfa992f'
    },
    {
      name: 'vrUnloadPlugin',
      brief: '',
    ref: 'group__api__lua.html#1ga15a0acc36f7bf89045a21da9c225334e'
    },
    {
      name: 'vrLoadAvatarFromFileToEdit',
      brief: 'Loads an avatar from a file and places it in a scene to edit',
    ref: 'group__api__lua.html#1ga15ab32c9acb0df5c2c07faef305b461c'
    },
    {
      name: 'vrAddPropertyVec4f',
      brief: 'Adds a new vec4f property to an unfinished metanode',
    ref: 'group__api__lua.html#1ga15cad561aed6063966864b09140f0054'
    },
    {
      name: 'vrNodeDecomposeTransform',
      brief: 'Decomposes the nodes world transform property into seperate postion, rotation and scale tables / vectors',
    ref: 'group__api__lua.html#1ga1655eecc57c635645230ad58bc3c0332'
    },
    {
      name: 'vrClusterShowSequencer',
      brief: 'DEPRECATED - use vrShowSequencer',
    ref: 'group__api__lua.html#1ga17060b480dd7f07b96f3d6a8e5b76bab'
    },
    {
      name: 'vrNodeComposeLocalTransform',
      brief: 'Compose the nodes local transform property from seperate position, rotation and scale tables / vectors',
    ref: 'group__api__lua.html#1ga172e43338790b442d3e58934b66adc05'
    },
    {
      name: 'vrHistoryStepForward',
      brief: 'Redoes the history to the next history mark',
    ref: 'group__api__lua.html#1ga17ede990637cfeaa4e2a60cd876c45c5'
    },
    {
      name: 'vrNodeForEachChildOfType',
      brief: 'Calls a function for each child of a node that matches a specified type',
    ref: 'group__api__lua.html#1ga18a57f067dad6f77267cc56120735f8b'
    },
    {
      name: 'vrRay',
      brief: 'Returns a ray',
    ref: 'group__api__lua.html#1ga1942aa3703617ffcf64f469c239bebc4'
    },
    {
      name: 'vrAddPropertyVec2f',
      brief: 'Adds a new vec2f property to an unfinished metanode',
    ref: 'group__api__lua.html#1ga19a5ee968e19614f222b0b636ab1a641'
    },
    {
      name: 'vrNodeSetLocalPositionY',
      brief: 'Sets the local y position of the node',
    ref: 'group__api__lua.html#1ga19f6cbf5103624596b07ad4bb0537291'
    },
    {
      name: 'vrGetIconsLibrary',
      brief: 'Gets the library in which browser icons are stored',
    ref: 'group__api__lua.html#1ga1b48adeca164e55060a45df2e5a481ce'
    },
    {
      name: 'vrNodeGetChildByIndex',
      brief: 'Gets a nodes child by its zero-based indexvrNodeGetChild and vrNodeGetSibling instead ',
    ref: 'group__api__lua.html#1ga1caaba18cc3545930ae3aa3cfe41a5f8'
    },
    {
      name: 'vrClusterShowSettingsWindow',
      brief: 'DEPRECATED - use vrShowSettingsWindow',
    ref: 'group__api__lua.html#1ga1dcb8d67b9e282b851f464e01d0d020b'
    },
    {
      name: 'vrNodeGetTail',
      brief: 'Gets the last child of a node',
    ref: 'group__api__lua.html#1ga1e638da858df618ad182db6b4672ef86'
    },
    {
      name: 'vrSetIconToDefault',
      brief: 'Sets the browser icon for a node to the default icon',
    ref: 'group__api__lua.html#1ga1edd99daad89ce30e5a623362a097501'
    },
    {
      name: 'vrNodeIsInGroup',
      brief: 'Returns true is the node is in the group',
    ref: 'group__api__lua.html#1ga1f88d99f649f25549c37d7a898831132'
    },
    {
      name: 'vrGetLocalBody',
      brief: 'Gets the local body, regardless of any remote connections',
    ref: 'group__api__lua.html#1ga2005e04d7191fdf87f928d2fcca09518'
    },
    {
      name: 'vrSearchView',
      brief: 'Sets the search query for a specified view',
    ref: 'group__api__lua.html#1ga210d652a9f2e39b619a7f357e21a504a'
    },
    {
      name: 'vrNodeSetRotation',
      brief: 'Sets the world rotation of the node',
    ref: 'group__api__lua.html#1ga22f5c140d29109fa64c7eb4bf140b14d'
    },
    {
      name: 'vrAnnotationGetCommentText',
      brief: 'Gets the text from an annotation comment',
    ref: 'group__api__lua.html#1ga23212b3c657ef8ccf70db6790049cf48'
    },
    {
      name: 'vrAddPropertyVec2w',
      brief: 'Adds a new vec2w property to an unfinished metanode',
    ref: 'group__api__lua.html#1ga24f2c4a0eb7120bdd950b877fb732e03'
    },
    {
      name: 'vrAppCommandBind',
      brief: 'Binds a lua function to an app command',
    ref: 'group__api__lua.html#1ga24f45bf1928c2bb36a616d0944a76924'
    },
    {
      name: 'vrCaptureCleanState',
      brief: 'Captures the current state of the Lua global environment',
    ref: 'group__api__lua.html#1ga256bf49af19460b5e2598edeaa376008'
    },
    {
      name: 'vrPopupScriptWindow',
      brief: 'DEPRECATED - use vrShowScriptWindow',
    ref: 'group__api__lua.html#1ga25bc0f80497e7ef9ef4c9013b881e4b6'
    },
    {
      name: 'vrAddMetaNodeObserver',
      brief: 'Adds an observer of events from a MetaNode',
    ref: 'group__api__lua.html#1ga25c3e2a2ab0bce779062726c20a15efd'
    },
    {
      name: 'vrSetViewportLayout',
      brief: 'Sets the user\'s current viewport layout',
    ref: 'group__api__lua.html#1ga2615a6e0abb7fad941e73e5faaf9ea74'
    },
    {
      name: 'vrPasteAsSibling',
      brief: 'Pastes the contents of the clipboard as a sibling to the specified node',
    ref: 'group__api__lua.html#1ga26bef8ff56a0af7b3ead03eacb4929b9'
    },
    {
      name: 'vrNormalise',
      brief: 'Returns normalised vector/matrix',
    ref: 'group__api__lua.html#1ga2703905b878a99d9329752ddb5f8e43b'
    },
    {
      name: 'vrGetTrackedHandNode',
      brief: 'Gets the current tracked hand node',
    ref: 'group__api__lua.html#1ga28275181396cbdf538f0c0cf95c4033d'
    },
    {
      name: 'vrGroupSnapshot',
      brief: 'Creates a snapshot of the specified group',
    ref: 'group__api__lua.html#1ga28ef5c991bfb2c3816f911e6a1a6add5'
    },
    {
      name: 'vrDataFile',
      brief: 'Gets the specified file path from the Visionary Render application data directory, or an empty string if it does not exist',
    ref: 'group__api__lua.html#1ga2959cbf15aa1b3c10a330dc034a35982'
    },
    {
      name: 'vrBodyGetWorldPos',
      brief: 'Gets the user\'s body position and rotation',
    ref: 'group__api__lua.html#1ga29a2cff6f3f791f30be56c0e29823b20'
    },
    {
      name: 'vrGetGradientColourAt',
      brief: 'Gets the gradient colour ',
    ref: 'group__api__lua.html#1ga2a48b29270cd62572c40ddb10f4b8f9f'
    },
    {
      name: 'vrSettingSetStep',
      brief: 'Assigns a step size to a numerical setting',
    ref: 'group__api__lua.html#1ga2a711e20d40cd55465461f5c32b2dd4f'
    },
    {
      name: 'vrSetSelectedTreeFrame',
      brief: 'Sets the currently selected tree view frame by name',
    ref: 'group__api__lua.html#1ga2a90884e503727170afcdaab18365149'
    },
    {
      name: 'vrMetaNodeGetProperty',
      brief: 'Gets the name, type and type description of a MetaNode property',
    ref: 'group__api__lua.html#1ga2b55644e117e32ef5d303bb6fe0b40a3'
    },
    {
      name: 'vrEnableNetwork',
      brief: 'Enables networking capabilities',
    ref: 'group__api__lua.html#1ga2b6e3f5bef767c3bd49f71b78e7a1fe7'
    },
    {
      name: 'vrMergeTree',
      brief: 'Merges a Visionary Render format file with the current scene',
    ref: 'group__api__lua.html#1ga2c1cef1ae43aa67e17bc5e1efc611634'
    },
    {
      name: 'vrScriptEditorClearOutput',
      brief: 'Clears the script editor output',
    ref: 'group__api__lua.html#1ga2c20c94f5d3cc3f1d68f8b4a9ccc732f'
    },
    {
      name: 'vrGetVisRenVersion',
      brief: 'Returns the version number of Visionary Render being used',
    ref: 'group__api__lua.html#1ga2c4de7bb9a2c1279388681133d2ad486'
    },
    {
      name: 'vrNodeSetParent',
      brief: 'Sets the parent of a node',
    ref: 'group__api__lua.html#1ga2c55babb00537f57f90814a5741948ae'
    },
    {
      name: 'vrHideModalDialogues',
      brief: 'Suppresses all modal dialogue message boxes',
    ref: 'group__api__lua.html#1ga2e0410eab63b740427c227e3c908f2ec'
    },
    {
      name: 'vrPushRecentImportFile',
      brief: 'Adds a file to the end of the list of recent imports and its folder to the end of the list of recent import folders',
    ref: 'group__api__lua.html#1ga2e16134647a3816bf8d9898db1f831f3'
    },
    {
      name: 'vrBodySetPitch',
      brief: 'Sets the pitch of the body',
    ref: 'group__api__lua.html#1ga2fcb770e5c2ce3e84c493593cf5b73b7'
    },
    {
      name: 'vrLoadTree',
      brief: 'Loads a Visionary Render format file',
    ref: 'group__api__lua.html#1ga30af2ef1d52d58dcc0154bc276115003'
    },
    {
      name: 'vrGenLightning',
      brief: 'Generates a lightning polyline',
    ref: 'group__api__lua.html#1ga30be7c71541126283ff91285da472890'
    },
    {
      name: 'vrScriptEditorCopySelection',
      brief: 'Copies the selected text in the currently visible script editor tab to the clipboard',
    ref: 'group__api__lua.html#1ga30c45d6ae49f9fdb3780fc0e62884bc9'
    },
    {
      name: 'vrSettingRemoveFromScene',
      brief: 'Removes a scene setting',
    ref: 'group__api__lua.html#1ga3114d11e25ae446765d87ddc15459612'
    },
    {
      name: 'vrUpdateMenu',
      brief: 'Create menu item frames for children of the menu node',
    ref: 'group__api__lua.html#1ga3209c603a583fd7b7b9257aec6adddfb'
    },
    {
      name: 'vrRevertToCleanState',
      brief: 'Restores the captured state of the Lua global environment',
    ref: 'group__api__lua.html#1ga32530f94afb18401a297dda96462a5f4'
    },
    {
      name: 'vrSettingGetNode',
      brief: 'Gets an application setting node from the user registry, or a scene override if it exists',
    ref: 'group__api__lua.html#1ga3260eac0919960af29754effbac1d3bc'
    },
    {
      name: 'vrMetaNodeGetPropertyCount',
      brief: 'Gets the number of properties defined by a MetaNode',
    ref: 'group__api__lua.html#1ga3261fa672021af760ac4261e4b7479bd'
    },
    {
      name: 'vrAddPropertyVec4i',
      brief: 'Adds a new vec4i property to an unfinished metanode',
    ref: 'group__api__lua.html#1ga32d28eaee026e5e2da6ead4a2b35f313'
    },
    {
      name: 'vrClusterPopupToolsWindow',
      brief: 'DEPRECATED - use vrPopupToolsWindow',
    ref: 'group__api__lua.html#1ga3300eb0353eb1c50768a508061fabeee'
    },
    {
      name: 'vrBodyConnectView',
      brief: 'Connects to a users body',
    ref: 'group__api__lua.html#1ga338f2fd8e3e9dac20da8e58ce66895e7'
    },
    {
      name: 'vrLocalUserNode',
      brief: 'Returns the local user\'s node',
    ref: 'group__api__lua.html#1ga33bfbacb2de925c599cbd7f6e0a481ae'
    },
    {
      name: 'vrNodeGetWorld',
      brief: 'DEPRECATED',
    ref: 'group__api__lua.html#1ga33d3f7b86b2d8b025d37bd2297a5bfd5'
    },
    {
      name: 'vrWitnessSetSequencePos',
      brief: 'INTERNAL',
    ref: 'group__api__lua.html#1ga3490cb0bf3a260d8ffcc8a33bfcce00a'
    },
    {
      name: 'vrNodeSetNoSimulation',
      brief: 'Specifies whether this node should be affected by simulations, such as physics and collision',
    ref: 'group__api__lua.html#1ga354f1f12975a71d6e2d4ae47fb527936'
    },
    {
      name: 'vrAddPropertyVec4w',
      brief: 'Adds a new vec4w property to an unfinished metanode',
    ref: 'group__api__lua.html#1ga356f15d00c859c4d20971cfc1b348828'
    },
    {
      name: 'vrIsClustered',
      brief: 'Returns true if running in a cluster configuration',
    ref: 'group__api__lua.html#1ga35bab4b631f975c5daa73d064e40a758'
    },
    {
      name: 'vrScriptEditorSelectAll',
      brief: 'Selects all the text in the currently visible script editor tab',
    ref: 'group__api__lua.html#1ga36eb86125aa6cda5f6f712230f263874'
    },
    {
      name: 'vrBuildCurveViewConfig',
      brief: 'Creates or updates the PhysicalScreen and Viewport nodes for a curved screen',
    ref: 'group__api__lua.html#1ga3735d83aa760b1dabbfd1254c7cea1f2'
    },
    {
      name: 'vrAddPropertyChar',
      brief: 'Adds a new character property to an unfinished metanode',
    ref: 'group__api__lua.html#1ga37bb2deb498a091e666c8a956bf5d188'
    },
    {
      name: 'vrCloseNotebookPane',
      brief: 'Closes the specified pane of the given notebook',
    ref: 'group__api__lua.html#1ga37fc84d2d2ab33b21d356dc88c3be922'
    },
    {
      name: 'vrCreateShape',
      brief: 'Creates a new shape and attaches it to a parent node',
    ref: 'group__api__lua.html#1ga382ada1549e0d3f4e5f5229366979a63'
    },
    {
      name: 'vrSettingRead',
      brief: 'Reads the value of a setting',
    ref: 'group__api__lua.html#1ga3895fcdfad8542ed1d00814b2380a90d'
    },
    {
      name: 'vrScriptEditorCutSelection',
      brief: 'Copies the selected text in the currently visible script editor tab to the clipboard and then erases it',
    ref: 'group__api__lua.html#1ga38ed55a82fa0a2f31fa37f07b4aa1772'
    },
    {
      name: 'vrWitnessSetMaterial',
      brief: 'INTERNAL',
    ref: 'group__api__lua.html#1ga39dde1a1f04baced3e7ced1141a001dc'
    },
    {
      name: 'vrGetOwnerNode',
      brief: 'Get the node that owns this Vector, Matrix, Ray, Sphere, AABBox, Quaternion or Plane',
    ref: 'group__api__lua.html#1ga3aaa8edf31a44ff52fad0282bd065762'
    },
    {
      name: 'vrNodeSetValueByIndex',
      brief: 'Sets the value of one of the properties of a node finding the property by its index',
    ref: 'group__api__lua.html#1ga3ba8de9ef112e5aa2e77ea4242d5be25'
    },
    {
      name: 'vrResetWindows',
      brief: 'Resets the windows to their initial positions and states that they were when the application was started',
    ref: 'group__api__lua.html#1ga3bc6497df4301852135ef3a166709225'
    },
    {
      name: 'vrNodeSetRelativeTransform',
      brief: 'Sets the position, rotation and scale of the world transform of a node relative to another',
    ref: 'group__api__lua.html#1ga3da601a33054f2e9259297f54e63f35d'
    },
    {
      name: 'vrGetBody',
      brief: 'Gets the body currently controlling the user\'s view',
    ref: 'group__api__lua.html#1ga3e088c85728f6248d6f1e5993baa1f77'
    },
    {
      name: 'vrBodyFlyToFit',
      brief: 'Flies the body to a position where it can see the whole of node from that angle, over time seconds',
    ref: 'group__api__lua.html#1ga3e341b949d3347026b47515345d4117a'
    },
    {
      name: 'vrPostCommand',
      brief: 'Posts a command to be processed by Visionary Render',
    ref: 'group__api__lua.html#1ga3e481c111a9f52438af567ee8d16d9b2'
    },
    {
      name: 'vrParseJSON',
      brief: 'Parse JSON data into a Lua table',
    ref: 'group__api__lua.html#1ga3e81301792027ed44a1d17c7e14fe66f'
    },
    {
      name: 'vrAnnotationSetActive',
      brief: 'Sets the specified annotation as the active one and flies to its default viewpoint',
    ref: 'group__api__lua.html#1ga3eb12293437f8770a549065a7f96b94a'
    },
    {
      name: 'vrSaveTree',
      brief: 'Saves a Visionary Render format file',
    ref: 'group__api__lua.html#1ga3f5827c602c7ff4267bf8e1f729f62d0'
    },
    {
      name: 'vrQuaternionFromEulerAngles',
      brief: 'Return a quaternion constructed from euler angles',
    ref: 'group__api__lua.html#1ga4001e4f3725c45d62db9328df4b74a2b'
    },
    {
      name: 'vrInCoroutine',
      brief: 'Executes the specified piece of Lua in a coroutine',
    ref: 'group__api__lua.html#1ga4098c475a6160dc680130f1efcb42dc2'
    },
    {
      name: 'vrAABoxExtent',
      brief: 'Returns the largest dimension of an axis aligned bounding box',
    ref: 'group__api__lua.html#1ga40ace5361b715698fe8a98ef01179061'
    },
    {
      name: 'vrClusterShowInTree',
      brief: 'DEPRECATED - use vrSelectNodes',
    ref: 'group__api__lua.html#1ga414faa6cfc52effbf86b4d828af30569'
    },
    {
      name: 'vrNodeSetLocalRotation',
      brief: 'Sets the local rotation of the node',
    ref: 'group__api__lua.html#1ga416d5984532e15081b9ae164a5b6bd5e'
    },
    {
      name: 'vrNodeGetLocalScaleX',
      brief: 'Gets the local x scale of the node',
    ref: 'group__api__lua.html#1ga418353beef3ac721ab63c28fbdab2d41'
    },
    {
      name: 'vrBodyGetViewConnection',
      brief: 'Returns the object to which the view is currently connected',
    ref: 'group__api__lua.html#1ga4215255397a61e857a4a76f157016367'
    },
    {
      name: 'vrAddPropertyArrayDouble',
      brief: 'Adds a new double array property to an unfinished metanode',
    ref: 'group__api__lua.html#1ga42305f35c2f002a60abbd10f9b3ad26e'
    },
    {
      name: 'vrSetTransformLimits',
      brief: 'Adds transform limits onto a node',
    ref: 'group__api__lua.html#1ga42a4ebdc85555849cd273f1aa140821b'
    },
    {
      name: 'vrPrimaryUserNode',
      brief: 'Returns the cluster master\'s user node, or the local user node if unclustered',
    ref: 'group__api__lua.html#1ga42d82258751d5e4f779b999ff63544cc'
    },
    {
      name: 'vrNodeGetPreviousSibling',
      brief: 'Gets the previous sibling ',
    ref: 'group__api__lua.html#1ga430a7e1998a775f9d605c63a5f207e39'
    },
    {
      name: 'vrNodeGetValue',
      brief: 'Gets the value of a property of a node',
    ref: 'group__api__lua.html#1ga446e917f3ca4cc03d78ad2af8177abc6'
    },
    {
      name: 'vrAbortScript',
      brief: 'Aborts a suspended script',
    ref: 'group__api__lua.html#1ga4473693b9d5020e2960564f1e315b3a4'
    },
    {
      name: 'vrSettingCreateString',
      brief: 'Creates a new string user setting',
    ref: 'group__api__lua.html#1ga44b4edc877664c47403a5d289c78cd19'
    },
    {
      name: 'vrAnnotationCreate',
      brief: 'Create an annotation at the specified location, linked to the specified object',
    ref: 'group__api__lua.html#1ga454230e7f5fbbc02b83c3b8d12608d41'
    },
    {
      name: 'vrForkApp',
      brief: 'Forks the application into another process',
    ref: 'group__api__lua.html#1ga455a332f856cf53e2d89e83d38e0d904'
    },
    {
      name: 'vrSnapshotApply',
      brief: 'Applies the specified snapshot',
    ref: 'group__api__lua.html#1ga4578014b9e5f7b54b675d8546c4b25cc'
    },
    {
      name: 'vrPolarToRadians',
      brief: 'Convert polar coordinates to radians',
    ref: 'group__api__lua.html#1ga457c23221a34c27d3775a3230ebef37f'
    },
    {
      name: 'vrMakeTorus',
      brief: 'Creates a torus shape',
    ref: 'group__api__lua.html#1ga4591b6f4a1773fe399ab855976c4d1ac'
    },
    {
      name: 'vrGetSelectedTreeFrame',
      brief: 'Returns the name of the selected tree frame',
    ref: 'group__api__lua.html#1ga46a063948acb694c1cfe0182887c5285'
    },
    {
      name: 'vrSettingCreateInt',
      brief: 'Creates a new integer user setting',
    ref: 'group__api__lua.html#1ga47367832568cb2868744fe230f8cf8b5'
    },
    {
      name: 'vrNodeGetRotationX',
      brief: 'Gets the world x rotation of the node',
    ref: 'group__api__lua.html#1ga477a1f5427945b9932a54551dc36d406'
    },
    {
      name: 'vrPopupGalleryWindow',
      brief: 'Pops up the gallery window',
    ref: 'group__api__lua.html#1ga47ad769695d586d5c7e4794614acf8a7'
    },
    {
      name: 'vrUpdateSelectionHistoryMenu',
      brief: 'Updates a menu to display the current selection history',
    ref: 'group__api__lua.html#1ga48d232c73a616efc459642808e0c0dd7'
    },
    {
      name: 'vrListInstalledAdapters',
      brief: 'DEPRECATED',
    ref: 'group__api__lua.html#1ga492bd798331abd0117ef790b8cbdf212'
    },
    {
      name: 'vrQuaternionFromMat',
      brief: 'Returns a quaternion constructed from a 4x4 matrix',
    ref: 'group__api__lua.html#1ga494f38bb89beb5a1f6a5411ee6300542'
    },
    {
      name: 'vrMatRotateEulerX',
      brief: 'Return M rotated on the X axis by angle V',
    ref: 'group__api__lua.html#1ga4996030f409785bec0b2791851457246'
    },
    {
      name: 'vrNodeGetScaleX',
      brief: 'Gets the world x scale of the node',
    ref: 'group__api__lua.html#1ga4a183e72e8d1aa2efdefcc28c6a28cfb'
    },
    {
      name: 'vrScriptEditorFind',
      brief: 'Finds some text in the currently visible script editor tab',
    ref: 'group__api__lua.html#1ga4a396b63f90d7b2b4d0a6600991fe45d'
    },
    {
      name: 'vrSetConfigMode',
      brief: 'Sets the config to the specified mode, if its available',
    ref: 'group__api__lua.html#1ga4a3ca0b0675f2bef7d80074cbe0d2f3e'
    },
    {
      name: 'vrPresentMessage',
      brief: 'Presents a message box to the user',
    ref: 'group__api__lua.html#1ga4a5a477891c3925a874188f6b0fedc20'
    },
    {
      name: 'vrPopupPropertyWindow',
      brief: 'Pops open the property window',
    ref: 'group__api__lua.html#1ga4a7bf26415f5daa499a8d4a8921da95c'
    },
    {
      name: 'vrGetCommandLineSwitch',
      brief: 'Returns whether or not a command line switch was specified',
    ref: 'group__api__lua.html#1ga4a9010d87fefee1e686bac1204575ec6'
    },
    {
      name: 'vrTreeRangeSelect',
      brief: 'Selects all nodes between the specified node and the last selected node',
    ref: 'group__api__lua.html#1ga4b1d5d770036fa214af786d3202e226c'
    },
    {
      name: 'vrNodeGetScaleZ',
      brief: 'Gets the world z scale of the node',
    ref: 'group__api__lua.html#1ga4c460994483e47f30021690ad83b26d0'
    },
    {
      name: 'vrNodeArrayPush',
      brief: 'Pushes a new value to the end of an array property',
    ref: 'group__api__lua.html#1ga4cf2655302afe7fb2f42aff53787ba3e'
    },
    {
      name: 'vrAddPropertyString',
      brief: 'Adds a new string property to an unfinished metanode',
    ref: 'group__api__lua.html#1ga4cfee3bb98449d2768eec0086acd8367'
    },
    {
      name: 'vrAnnotationSetDefaultViewpoint',
      brief: 'Sets the default viewpoint for an annotation',
    ref: 'group__api__lua.html#1ga4d159f13e290609b10bdeef7566ab16a'
    },
    {
      name: 'vrBodyLookAt',
      brief: 'Rotates the body so that it is looking at subjectNode, over time seconds',
    ref: 'group__api__lua.html#1ga4e1108ddd76f1068b881e1d7a05d4698'
    },
    {
      name: 'vrFindAndOptimizeModels',
      brief: 'Finds and optimises model nodes',
    ref: 'group__api__lua.html#1ga4e5d25d0252a4b010404ad0a155bfe49'
    },
    {
      name: 'vrNodeGetRotationZ',
      brief: 'Gets the world z rotation of the node',
    ref: 'group__api__lua.html#1ga4ec62ff9bbcea38f99696c25d9dd8c9c'
    },
    {
      name: 'vrIsTrackingEnabled',
      brief: 'Gets the enabled state of the user\'s tracking',
    ref: 'group__api__lua.html#1ga4f06ed8691e48e37fca23e57068fd431'
    },
    {
      name: 'vrNodeSetValue',
      brief: 'Sets the value of one of the properties of a node',
    ref: 'group__api__lua.html#1ga4f6a1697478d4700f42b17daf94c3d74'
    },
    {
      name: 'vrScriptEditorPasteCopyBuffer',
      brief: 'Reads the clipboard, translates the contents and inserts them at the insertion point in the currently visible script editor tab',
    ref: 'group__api__lua.html#1ga501f6ec4bc1aa2e624b4cf4da7219612'
    },
    {
      name: 'vrVec3',
      brief: 'Returns a 3 dimensional vector',
    ref: 'group__api__lua.html#1ga502bed12f9b5cc0288e0f56b9975190e'
    },
    {
      name: 'vrNodeSetNoHistory',
      brief: 'Specifies whether this node can be recorded in the history for undo/redo operations',
    ref: 'group__api__lua.html#1ga508c4fc27b63fe3e86b73e7a50055ecf'
    },
    {
      name: 'vrNodeGetPositionZ',
      brief: 'Gets the world z position of the node',
    ref: 'group__api__lua.html#1ga512494af50f649e69b9da219ef46837a'
    },
    {
      name: 'vrModifierPressed',
      brief: 'Tests whether any modifier keys are pressed',
    ref: 'group__api__lua.html#1ga51784c665a243e3284207a8105e2fccd'
    },
    {
      name: 'vrCreateShapeData',
      brief: 'Creates vertex and index nodes of a shape and adds them to the Mesh node passed in',
    ref: 'group__api__lua.html#1ga519c8e1cfca9ec4b5d58b5e8ef2b525b'
    },
    {
      name: 'vrAddPropertyVectorString',
      brief: 'Adds a new string vector property to an unfinished metanode',
    ref: 'group__api__lua.html#1ga52358167bc2d0e5e92884fe1c6db5346'
    },
    {
      name: 'vrGetRecentImportFileList',
      brief: 'Returns the list of recent import files',
    ref: 'group__api__lua.html#1ga5244967fafc46948f05b042b26b6e94b'
    },
    {
      name: 'vrNodeArrayClear',
      brief: 'Clears an array property',
    ref: 'group__api__lua.html#1ga526f4c5c3df276dcd0ee7ff568c1be35'
    },
    {
      name: 'vrNodeSetLocalRotationZ',
      brief: 'Sets the local z rotation of the node',
    ref: 'group__api__lua.html#1ga5332b855d099e4be059495ed25fa6598'
    },
    {
      name: 'vrNodeGetScaleY',
      brief: 'Gets the world y scale of the node',
    ref: 'group__api__lua.html#1ga534fe9ea3a8177c44ed6233625bdc1f8'
    },
    {
      name: 'vrMakeCylinder',
      brief: 'Creates a cylinder shape',
    ref: 'group__api__lua.html#1ga53a51fc023e73f29090b7f4e159d59cc'
    },
    {
      name: 'vrAddPropertyArrayWorldFloat',
      brief: 'Adds a new world float array property to an unfinished metanode',
    ref: 'group__api__lua.html#1ga53aa51e14d3a2c0b7f71101a0eee5229'
    },
    {
      name: 'vrBodyFlyToFitSphere',
      brief: 'Flies the body to a position where it can see the whole of a bounding sphere, over time seconds',
    ref: 'group__api__lua.html#1ga5410552e9c4a149af9c41a1eade9aaf0'
    },
    {
      name: 'vrBodyFlyToLookAt',
      brief: 'Flies the body to a position where it is looking at the selected object from the specified direction, over time seconds',
    ref: 'group__api__lua.html#1ga54bfe1835c9e06b91c0becdec3650913'
    },
    {
      name: 'vrTestIntersection',
      brief: 'Returns whether or not two objects are intersecting one another',
    ref: 'group__api__lua.html#1ga556c3b8798e1ea5a315cc08a7220ae3a'
    },
    {
      name: 'vrCursorGetTouchedVisual',
      brief: 'Gets the first visual currently under the mouse cursor',
    ref: 'group__api__lua.html#1ga55d7a230db1aa48f3ad817fc1c6c80d3'
    },
    {
      name: 'vrNodeGetPositionX',
      brief: 'Gets the world x position of the node',
    ref: 'group__api__lua.html#1ga5694fe268c2544e2add71794387ee462'
    },
    {
      name: 'vrReloadAudio',
      brief: 'Finds audio nodes and reloads the audio data from the associated files',
    ref: 'group__api__lua.html#1ga56c4fd878575f75a7cb024a5d018281c'
    },
    {
      name: 'vrMatDeterminant',
      brief: 'Returns the determinant of the matrix',
    ref: 'group__api__lua.html#1ga56d3c4e0cdb83f02127f9b23363b5c54'
    },
    {
      name: 'vrSetScriptTimeout',
      brief: 'Overrides the default Lua timeout for scripts, until the next script event is triggered',
    ref: 'group__api__lua.html#1ga571a167ad57f0c34c4e85e493a5455f0'
    },
    {
      name: 'vrCopyNode',
      brief: 'Copies a node, and optionally its children, and adds that as a child of another node',
    ref: 'group__api__lua.html#1ga572c11ba7362b0e9e7b3f34d60a0bb16'
    },
    {
      name: 'vrEnableNodeWhenZSpaceAvailable',
      brief: 'Makes a button available when a zSpace device is detected',
    ref: 'group__api__lua.html#1ga57fd020679aa52040ce2a6c858c250dd'
    },
    {
      name: 'vrAppDir',
      brief: 'Gets the Visionary Render application directory',
    ref: 'group__api__lua.html#1ga587249e0ac8f2ab0d8a6ce922ca7ba6b'
    },
    {
      name: 'vrCopyBitmap',
      brief: 'Copies the texture data from a node onto the Windows clipboard',
    ref: 'group__api__lua.html#1ga58ba23d0f6b3e7c4c46f4be04bb1b84a'
    },
    {
      name: 'vrNodeGetLocalPosition',
      brief: 'Gets the local position of the node',
    ref: 'group__api__lua.html#1ga59180d38e0ca7a162db8c4c60c834af1'
    },
    {
      name: 'vrAddPropertyArrayBool',
      brief: 'Adds a new boolean array property to an unfinished metanode',
    ref: 'group__api__lua.html#1ga5adf953746088fafc06e70e48b384244'
    },
    {
      name: 'vrNodeSetLocalTransform',
      brief: 'DEPRECATED',
    ref: 'group__api__lua.html#1ga5b48555a2275fc6cd24b754f84cc3be5'
    },
    {
      name: 'vrAABox',
      brief: 'Construct an axis aligned bounding box',
    ref: 'group__api__lua.html#1ga5b62f9a0c9e9bc1ff772ff02f08231d2'
    },
    {
      name: 'vrNodeGetPosition',
      brief: 'Gets the world position of the node',
    ref: 'group__api__lua.html#1ga5b800e4a5aac37f528286ee82869040d'
    },
    {
      name: 'vrSettingCreateDouble',
      brief: 'Creates a new double user setting',
    ref: 'group__api__lua.html#1ga5bb84bbb849aacc1b972c54ea19c8958'
    },
    {
      name: 'vrNodeGetChild',
      brief: 'Gets the first child of a node',
    ref: 'group__api__lua.html#1ga5bde71208d9344aadbbc07a04d981d2c'
    },
    {
      name: 'vrFileExists',
      brief: 'Returns true if the specified file exists',
    ref: 'group__api__lua.html#1ga5c6bf6a14ee80169978388c94c8c80cd'
    },
    {
      name: 'vrScenesNode',
      brief: 'Returns the Scenes node from the tree',
    ref: 'group__api__lua.html#1ga5d3ed9a4664a58cd54b68ecf7911c10a'
    },
    {
      name: 'vrGetRecentFolderList',
      brief: 'Returns the list of recent folders',
    ref: 'group__api__lua.html#1ga5d59db9786a895db986f13e3905eaebc'
    },
    {
      name: 'vrTreeViewSelectionExpand',
      brief: 'Expands the current selection',
    ref: 'group__api__lua.html#1ga5e076944b8898d5b03a7ff646c3e690f'
    },
    {
      name: 'vrNodeSetPositionZ',
      brief: 'Sets the world z position of the node',
    ref: 'group__api__lua.html#1ga5e772f0078feb34376b569c251a0095c'
    },
    {
      name: 'vrOpenNotebookPane',
      brief: 'Opens the specified pane of the given notebook',
    ref: 'group__api__lua.html#1ga5e956a6ba84be0c809e96220bb6f83a8'
    },
    {
      name: 'vrAnnotationUpdateViewpoint',
      brief: 'Recaptures the view from the specified viewpoint',
    ref: 'group__api__lua.html#1ga5f40952b6713999cb25f6023213cb270'
    },
    {
      name: 'vrPopupToolsWindow',
      brief: 'Pops up the tools window',
    ref: 'group__api__lua.html#1ga605a8e656deaaa430d9e603de0b488c7'
    },
    {
      name: 'vrGetCursorPosition',
      brief: 'Get the mouse cursor\'s current position',
    ref: 'group__api__lua.html#1ga608c770dcb1e1d23765e83a1eb9298f6'
    },
    {
      name: 'vrScriptEditorGetCurrentLine',
      brief: 'Returns the current line number ',
    ref: 'group__api__lua.html#1ga625ad207436c6649a034546612279cbb'
    },
    {
      name: 'vrAABoxMerge',
      brief: 'Returns an axis aligned bounding box that contains two other bounding boxes',
    ref: 'group__api__lua.html#1ga62fe390899572bec472b74c2e3a41a9e'
    },
    {
      name: 'vrGeometryOp',
      brief: 'Performs a geometry operation',
    ref: 'group__api__lua.html#1ga630a9c30dd658de3adbdee2db4648b00'
    },
    {
      name: 'vrNodeRestoreTransform',
      brief: 'Restores the captured transform of a node',
    ref: 'group__api__lua.html#1ga6319544616fdce6954f7fd018c39658a'
    },
    {
      name: 'vrNodeGetLocalBoundingSphereCentre',
      brief: 'Gets the centre of the local bounding sphere of a node',
    ref: 'group__api__lua.html#1ga635c40fbda869e4ae070da72b6e6cd1f'
    },
    {
      name: 'vrTestContain',
      brief: 'Returns whether or object A completly contains object B',
    ref: 'group__api__lua.html#1ga636a93494d8f58dea4858b04d8f30f4a'
    },
    {
      name: 'vrTreeViewSelectionExpandAll',
      brief: 'Expands the current selection and its descendants',
    ref: 'group__api__lua.html#1ga63b179f4954ba16f25d370fd429b310f'
    },
    {
      name: 'vrCreateNode',
      brief: 'Creates a new node and attaches it to a parent node',
    ref: 'group__api__lua.html#1ga64622e870970defea0ceef6473efbbe3'
    },
    {
      name: 'vrGetActivatorNode',
      brief: 'Gets the node which activated the event',
    ref: 'group__api__lua.html#1ga64b0b253cd0bdb28c6b52694cfdd127d'
    },
    {
      name: 'vrVec2',
      brief: 'Returns a 2 dimensional vector',
    ref: 'group__api__lua.html#1ga65cef0bc0451cebdb66897d10714c7d7'
    },
    {
      name: 'vrGetAdapterInfo',
      brief: 'DEPRECATED',
    ref: 'group__api__lua.html#1ga6737f5970cfb5a949d21652856fde981'
    },
    {
      name: 'vrGetRecentImportFolderList',
      brief: 'Returns the list of recent import folders',
    ref: 'group__api__lua.html#1ga676f625056c55604cdbf7123e0d4c603'
    },
    {
      name: 'vrSelectNode',
      brief: 'Selects a node by adding it to the specified selection group',
    ref: 'group__api__lua.html#1ga679b7e4da797e60b62a7c364ddf1bc4b'
    },
    {
      name: 'vrIntegerToBits',
      brief: 'Converts an integer to a boolean value for each bit',
    ref: 'group__api__lua.html#1ga6804b8ad18fabaa8288cd652ebcbe42e'
    },
    {
      name: 'vrSettingAddToScene',
      brief: 'Creates a scene setting as an override to an existing setting or a scene-only setting',
    ref: 'group__api__lua.html#1ga682fa888f06368f7dcf93988b19e4fa4'
    },
    {
      name: 'vrPopupScriptWindowAndShow',
      brief: 'DEPRECATED - use vrShowScriptWindow',
    ref: 'group__api__lua.html#1ga68f3ea41730c33cc6638a1455ae0661b'
    },
    {
      name: 'vrHistoryClear',
      brief: 'Erases the undo history',
    ref: 'group__api__lua.html#1ga690b379966f66dd2b6fe3a1c89c57377'
    },
    {
      name: 'vrNodeArrayGetElement',
      brief: 'Gets the value of an element of an array property',
    ref: 'group__api__lua.html#1ga691a487955a3f7d4ea81682e50b27345'
    },
    {
      name: 'vrShowSettingsWindow',
      brief: 'Pops up the application settings for the specified settings group',
    ref: 'group__api__lua.html#1ga6a2814344517c8f629a92e0e74576520'
    },
    {
      name: 'vrClusterShowPropertyWindow',
      brief: 'DEPRECATED - use vrShowPropertyWindow',
    ref: 'group__api__lua.html#1ga6afb85df1bc64eef2dc3038c153cd697'
    },
    {
      name: 'vrApplyForce',
      brief: 'Applies a force to an object causing a dynamics response',
    ref: 'group__api__lua.html#1ga6b9753310f962797ba8c4e368e105dbc'
    },
    {
      name: 'vrSphereMerge',
      brief: 'Returns a sphere that encapsulates two spheres',
    ref: 'group__api__lua.html#1ga6c7a7cc1ae512dc67a977e996b16a3df'
    },
    {
      name: 'vrNodeGetPath',
      brief: 'Gets the encoded path to a node relative to the tree root',
    ref: 'group__api__lua.html#1ga6d18f58d8872e16545ce3325771d9549'
    },
    {
      name: 'vrFilterView',
      brief: 'Sets the filter for a specified view',
    ref: 'group__api__lua.html#1ga6d345c59b9e87aad1b7a719041bcf32b'
    },
    {
      name: 'vrNodeSetRotationY',
      brief: 'Sets the world y rotation of the node',
    ref: 'group__api__lua.html#1ga6d451d3fbb16dca4291dea2712cc7ce0'
    },
    {
      name: 'vrNodeGetRotationY',
      brief: 'Gets the world y rotation of the node',
    ref: 'group__api__lua.html#1ga6d82763e5ebda15dea32413c192a1089'
    },
    {
      name: 'vrClearSelection',
      brief: 'Clears the selection in the specified selection group',
    ref: 'group__api__lua.html#1ga6dca3009ea0931b274191a09601c4e74'
    },
    {
      name: 'vrShowGradientWindow',
      brief: 'Pops up the application gradient editor for the specified gradient node',
    ref: 'group__api__lua.html#1ga6df08932a8f38cf29b59a6ce20ab9a3f'
    },
    {
      name: 'vrSettingCreateArrayInt',
      brief: 'Creates a new integer array user setting',
    ref: 'group__api__lua.html#1ga6e8645cdf39589f038092a5464879dc1'
    },
    {
      name: 'vrNodeGetLocalPositionX',
      brief: 'Gets the local x position of the node',
    ref: 'group__api__lua.html#1ga6f1c59d70f2b7cd343cbae6b3f06fb2d'
    },
    {
      name: 'vrAddPropertyVec4d',
      brief: 'Adds a new vec4d property to an unfinished metanode',
    ref: 'group__api__lua.html#1ga6f4b1f9a6d5b5249476c73c98d8555bb'
    },
    {
      name: 'vrAngleRadians',
      brief: 'Calculates the angle of an arc in radians',
    ref: 'group__api__lua.html#1ga6ff8b47fc4365253510fb30d624d222e'
    },
    {
      name: 'vrPasteAsSiblingToSelection',
      brief: 'Pastes the contents of the clipboard as a sibling to the specified selection group',
    ref: 'group__api__lua.html#1ga700ecded24e09ca03e2fd205d89bfdbe'
    },
    {
      name: 'vrTransformVecByWorldRotation',
      brief: 'Transforms a vector by the world rotation of the node',
    ref: 'group__api__lua.html#1ga7142f4a10112024d87a82a7a27a67801'
    },
    {
      name: 'vrMatInverse',
      brief: 'Returns the inverse of a 4x4 matrix',
    ref: 'group__api__lua.html#1ga7190ab8e53934dad186041a41126bf15'
    },
    {
      name: 'vrLengthSquared',
      brief: 'Returns the squared length of a vector',
    ref: 'group__api__lua.html#1ga71a5340de13288aebbdb6c2eb0758b3d'
    },
    {
      name: 'vrSettingCreateArrayFloat',
      brief: 'Creates a new float array user setting',
    ref: 'group__api__lua.html#1ga71a7a47f2929a7f02396bdc338f1f1e9'
    },
    {
      name: 'vrUsingHMD',
      brief: 'Returns whether or not we are using a HMD',
    ref: 'group__api__lua.html#1ga72725e420b903646ad200623e09b5a7c'
    },
    {
      name: 'vrTrackedCursorGetTouchedAssembly',
      brief: 'Gets the first assembly currently under the tracked cursor',
    ref: 'group__api__lua.html#1ga72d250b931c2613c4d13fdf775dc6227'
    },
    {
      name: 'vrNodeArraySetElement',
      brief: 'Sets the value of one or more existing element of an array property',
    ref: 'group__api__lua.html#1ga730c9f2ca860792eea1a1080cea5a7a8'
    },
    {
      name: 'vrGetLastViewSelectionGroup',
      brief: 'Returns the selection group that was added to',
    ref: 'group__api__lua.html#1ga7454c63660e81da65e7e0c7c313cd32f'
    },
    {
      name: 'vrShowSequencer',
      brief: 'Shows the sequencer window',
    ref: 'group__api__lua.html#1ga74eba24bb593504befd8776189ce8270'
    },
    {
      name: 'vrAnnotationToggleInfoDisplay',
      brief: 'Toggles the visibility of annotation comments and other information gizmos',
    ref: 'group__api__lua.html#1ga7539398479ce0a5d3162dc141e4fa162'
    },
    {
      name: 'vrNodeGetLocalBoundingBoxCentre',
      brief: 'Gets the centre of the local bounding box of a node',
    ref: 'group__api__lua.html#1ga754ba673555be841622b8d29327f5340'
    },
    {
      name: 'vrClusterSlave',
      brief: 'Returns true if the local user is a cluster slave',
    ref: 'group__api__lua.html#1ga764ae6532a739abba170582719adbde2'
    },
    {
      name: 'vrClusterShowNodeProperties',
      brief: 'DEPRECATED - use vrShowPropertyWindow',
    ref: 'group__api__lua.html#1ga766e6d40862ed9f71f5d8486bfda490e'
    },
    {
      name: 'vrListSleepingScripts',
      brief: 'Lists the scripts currently suspended, awaiting resume',
    ref: 'group__api__lua.html#1ga768bd66e691b4bfd80c6b3a0dc9936ba'
    },
    {
      name: 'vrAddPropertyVectorChar',
      brief: 'Adds a new character vector property to an unfinished metanode',
    ref: 'group__api__lua.html#1ga771cc57e28f63195dcb8b79938a575ae'
    },
    {
      name: 'vrRequestSaveFile',
      brief: 'Invokes a dialog to save a file',
    ref: 'group__api__lua.html#1ga775ed7acb7a49e906c950dfe08c52fbd'
    },
    {
      name: 'vrNodeGetValueByIndex',
      brief: 'Gets the value of a property of a node finding the property by its index',
    ref: 'group__api__lua.html#1ga778c3c9037bde5d974b6b8842e97d1c0'
    },
    {
      name: 'vrToggleSubtreeStats',
      brief: 'Toggles the subtree stats display in the properties window',
    ref: 'group__api__lua.html#1ga7792348627827d4087732523c5c0fc57'
    },
    {
      name: 'vrSettingCreateLink',
      brief: 'Creates a new link user setting',
    ref: 'group__api__lua.html#1ga78901fa348d98b9ab58b4c8b185ca87d'
    },
    {
      name: 'vrIsDoublePrecision',
      brief: 'Returns true if the scenegraph uses double precision values for matrices etc',
    ref: 'group__api__lua.html#1ga7926aaebfb8f888d750d8d3c9b1f3505'
    },
    {
      name: 'vrGetContactPoints',
      brief: 'Returns a list of contact points and normals between two nodes',
    ref: 'group__api__lua.html#1ga7946fe1f0ecbb9ff96efee4d3bc9b696'
    },
    {
      name: 'vrMatSetValue',
      brief: 'Set the value of an element of a matrix',
    ref: 'group__api__lua.html#1ga7970ee0b8d3cacda84a1d0f89f266102'
    },
    {
      name: 'vrShowImporterSettings',
      brief: 'Invokes a dialog that shows the importer settings for the given node',
    ref: 'group__api__lua.html#1ga7a10ac0d27383cf59784478949bb2f2c'
    },
    {
      name: 'vrNodeFindChild',
      brief: 'Finds a descendant of a node by path',
    ref: 'group__api__lua.html#1ga7a4328eecee2395b2c41f5d7273ba4d3'
    },
    {
      name: 'vrGetCommandLineSwitchValue',
      brief: 'Returns the value of a command line switch',
    ref: 'group__api__lua.html#1ga7a4ceb4ed516e4344c1cf06b022c7d75'
    },
    {
      name: 'vrGatherMetaNode',
      brief: 'Returns a list of all nodes of given type in the scene and optionally under a given node',
    ref: 'group__api__lua.html#1ga7ac960d078eca5e1895ac875b755c071'
    },
    {
      name: 'vrShowPreviousSelection',
      brief: 'Navigates to the previous selection and shows the properties of the nodes',
    ref: 'group__api__lua.html#1ga7b031c20819b4eaf221829b73a1d3eb2'
    },
    {
      name: 'vrNodeGetChildBoundingBox',
      brief: 'Gets the combined bounding box of all a nodes children, relative to that node',
    ref: 'group__api__lua.html#1ga7b08520db6f2eb3e63c3cb9922283284'
    },
    {
      name: 'vrNodeSetWorld',
      brief: 'DEPRECATED',
    ref: 'group__api__lua.html#1ga7b0f9e3a1b39f2028c0f6d4f17908472'
    },
    {
      name: 'vrSetStatusBar',
      brief: 'Set the text and duration of the text in the status bar',
    ref: 'group__api__lua.html#1ga7b1b4fd3e1382b5a3be1b79a7d644342'
    },
    {
      name: 'vrScriptEditorSetInsertAtMousePos',
      brief: 'Places the text insert cursor in the currently visible script editor tab underneath the mouse cursor',
    ref: 'group__api__lua.html#1ga7ba2412a23dfc41fc929f21782060eba'
    },
    {
      name: 'vrMakeBox',
      brief: 'Creates a box shape',
    ref: 'group__api__lua.html#1ga7d5f87b4e04477ce9981e48eecdf3990'
    },
    {
      name: 'vrShowInTreeViewFrame',
      brief: 'DEPRECATED - use vrSelectNodes',
    ref: 'group__api__lua.html#1ga7d9ba6ed672d6410e1c406fd614551ba'
    },
    {
      name: 'vrShowPropertyWindow',
      brief: 'Pops up the application property editor for the specified view selection',
    ref: 'group__api__lua.html#1ga7da90a315b5f78e55df0279a011ca43f'
    },
    {
      name: 'vrPlaneLineIntersect',
      brief: 'Returns whether or not a line made of two points will intersect a plane',
    ref: 'group__api__lua.html#1ga7e703e1f51b1565cc6ca2e0e461eed5f'
    },
    {
      name: 'vrCursorIgnoreNode',
      brief: 'Makes the specified node unpickable with the cursor',
    ref: 'group__api__lua.html#1ga7e9435cfc9890fc84c3d803e86cafb8a'
    },
    {
      name: 'vrNodeSetLocalPositionX',
      brief: 'Sets the local x position of the node',
    ref: 'group__api__lua.html#1ga7ecddb70a09169e5687f6b2115de3b4d'
    },
    {
      name: 'vrSubDirs',
      brief: 'Gets the subdirectories of a directory',
    ref: 'group__api__lua.html#1ga7f162a0c9321b5feec3cee76d161536e'
    },
    {
      name: 'vrTreeViewSelectionCollapseAll',
      brief: 'Collapses the current selection and its descendants',
    ref: 'group__api__lua.html#1ga7fc14fa974d811b8de5468b56449ea1a'
    },
    {
      name: 'vrProgressBegin',
      brief: 'Begins showing the progress display',
    ref: 'group__api__lua.html#1ga8096016ca0e9021c334aafc84268b49b'
    },
    {
      name: 'vrParseXML',
      brief: 'Converts an XML string into a hierarchy of nested LUA tables',
    ref: 'group__api__lua.html#1ga80cf680c1d95df9f2278813091c5cbc6'
    },
    {
      name: 'vrGenerateQRCodeFile',
      brief: 'Generates a QR code and saves it to a file',
    ref: 'group__api__lua.html#1ga8103cb25772438171f15b8f3ba4601c8'
    },
    {
      name: 'vrNodeGetWorldTransform',
      brief: 'DEPRECATED',
    ref: 'group__api__lua.html#1ga81629a86625cb5d3343c9db9bb92e552'
    },
    {
      name: 'vrGetHoldingUser',
      brief: 'Return the user that is holding the node',
    ref: 'group__api__lua.html#1ga81b1ff4cba8ad518bae17a6aff35f45b'
    },
    {
      name: 'vrNodeGetRotation',
      brief: 'Gets the world rotation of the node',
    ref: 'group__api__lua.html#1ga82703213a3c9db16081ab47377bfdebe'
    },
    {
      name: 'vrSelectAndShowProperties',
      brief: 'DEPRECATED - use vrSelectNodes',
    ref: 'group__api__lua.html#1ga82b16622ef431bbd373cbdcad9b61e53'
    },
    {
      name: 'vrSetGUIEnabled',
      brief: 'Shows or hides the windows over the 3D scene',
    ref: 'group__api__lua.html#1ga82c29ffda00749b38217035943ada3b9'
    },
    {
      name: 'vrPlaneFromMatrix',
      brief: 'Returns a plane created from a matrix',
    ref: 'group__api__lua.html#1ga8314d63a513fadd9ed8e13db25e3c4bd'
    },
    {
      name: 'vrSettingGetRoot',
      brief: 'Gets the node associated with the root of the settings hierarchy',
    ref: 'group__api__lua.html#1ga832b3619603dd5afddd9399580a37102'
    },
    {
      name: 'vrIsToolEnabled',
      brief: 'Tests whether a named Tool is enabled',
    ref: 'group__api__lua.html#1ga83f6d9ebe01ebcd884a6eb5d83bf95e0'
    },
    {
      name: 'vrSphereTransform',
      brief: 'Returns a sphere transformed by a matrix',
    ref: 'group__api__lua.html#1ga849d1200c63e228ab0c3759df8e059fe'
    },
    {
      name: 'vrAnnotationSetCommentText',
      brief: 'Sets the text in an annotation comment',
    ref: 'group__api__lua.html#1ga85d15d33775cdf9eebcac5a74ef7d1a6'
    },
    {
      name: 'vrScriptEditorSetInsertPos',
      brief: 'Sets the text insert cursor position in the currently visible script editor tab',
    ref: 'group__api__lua.html#1ga85d8e339bac1c6eb80240c450cb9c688'
    },
    {
      name: 'vrPluginsDir',
      brief: 'Gets the Visionary Render plugins directory',
    ref: 'group__api__lua.html#1ga865a5e6e39178cfeedc854fdbb945a0f'
    },
    {
      name: 'vrNodeIsAncestor',
      brief: 'Query whether the first specified node is an ancestor of the second',
    ref: 'group__api__lua.html#1ga871b9860c5c107ed6e3b35fe4cbc7a4a'
    },
    {
      name: 'vrMakePlane',
      brief: 'Creates a plane shape',
    ref: 'group__api__lua.html#1ga87fd0a0dbec5ec67c7a03a15daf1235d'
    },
    {
      name: 'vrGroupRemoveMember',
      brief: 'Removes a node from the specified group',
    ref: 'group__api__lua.html#1ga8825f5b5371cd3626bbead84cb8f0637'
    },
    {
      name: 'vrSetIconToCurrentView',
      brief: 'Sets the browser icon for a node to the current view',
    ref: 'group__api__lua.html#1ga882be40f74bacfac5fc0d69dca6ac347'
    },
    {
      name: 'vrQuaternionFromAxisAngle',
      brief: 'Return a quaternion constructed from a rotation around an axis',
    ref: 'group__api__lua.html#1ga8875d36b708a868a2af338d2c04cbb17'
    },
    {
      name: 'vrRequestFolder',
      brief: 'Invokes a dialog to select a folder',
    ref: 'group__api__lua.html#1ga8881f7060cdd277922d667e2da640193'
    },
    {
      name: 'vrSuspendDynamics',
      brief: 'Enables or disables dynamics',
    ref: 'group__api__lua.html#1ga89be0eebfdb3350eb51ca37b3d807933'
    },
    {
      name: 'vrIsSystemNode',
      brief: 'Returns true if the system node is an ancestor of node',
    ref: 'group__api__lua.html#1ga8ac59414bed22777fc579d14d67b7819'
    },
    {
      name: 'vrNodeSetLocalScale',
      brief: 'Sets the local scale of the noed',
    ref: 'group__api__lua.html#1ga8b04a2a5ca223908976694141c2b95cb'
    },
    {
      name: 'vrArcLength',
      brief: 'Calculates the length of an arc',
    ref: 'group__api__lua.html#1ga8b1b9e8c7224fe07c31ed97ec5c28fbe'
    },
    {
      name: 'vrBodySetWorldPos',
      brief: 'Sets the body position and rotation instantly',
    ref: 'group__api__lua.html#1ga8b3d2ed900338083576fb7d19ef9dc40'
    },
    {
      name: 'vrSelectPrevious',
      brief: 'Navigates to the previous selection',
    ref: 'group__api__lua.html#1ga8c2b0ef7055cd459ee914e1b9d924725'
    },
    {
      name: 'vrTreeSearch',
      brief: 'Searches the tree and returns a table of results matching the query',
    ref: 'group__api__lua.html#1ga8c507fc79cf9663fdf868bb5c3bc215b'
    },
    {
      name: 'vrNodeGetLocalRotationZ',
      brief: 'Gets the local z rotation of the node',
    ref: 'group__api__lua.html#1ga8c7727709fd50c819ca0b9daa918bf51'
    },
    {
      name: 'vrMetaNodeGetPropertyByIndex',
      brief: 'Gets the name, type and type description of a MetaNode property',
    ref: 'group__api__lua.html#1ga8cce734c868cd507d927f549e8aa88c1'
    },
    {
      name: 'vrAddPropertyVec3f',
      brief: 'Adds a new vec3f property to an unfinished metanode',
    ref: 'group__api__lua.html#1ga8ceb78a6b668e06aad9f51ecdf12c1fb'
    },
    {
      name: 'vrMatRotateEulerZ',
      brief: 'Return M rotated on the Z axis by angle V',
    ref: 'group__api__lua.html#1ga8d9024f8e29c610fec05fc0dd496c74e'
    },
    {
      name: 'vrSelectNodes',
      brief: 'Selects the specified array of nodes in the most appropriate view',
    ref: 'group__api__lua.html#1ga8d928447485a927bfa865b7995c6b77c'
    },
    {
      name: 'vrShowAnnotationReviewWindow',
      brief: 'Pops up the applicaiton annotation review window for the specified annotation node',
    ref: 'group__api__lua.html#1ga8db056f25bfd7dfca9f9ada259810979'
    },
    {
      name: 'vrAddPropertyDouble',
      brief: 'Adds a new double property to an unfinished metanode',
    ref: 'group__api__lua.html#1ga8dee40c727bd753678af0134d77a644e'
    },
    {
      name: 'vrActivate',
      brief: 'Invokes the Activate event of a Node optionally setting the __Other register',
    ref: 'group__api__lua.html#1ga8e87277025a56b7c7265f65cae9b43de'
    },
    {
      name: 'vrAnnotationNext',
      brief: 'Flies to and returns the next annotation after the currently active one',
    ref: 'group__api__lua.html#1ga8eddb70ed6b2f7512e54256cc477e69c'
    },
    {
      name: 'vrCaptureViewpoint',
      brief: 'Captures the view from a specified viewpoint into a texture',
    ref: 'group__api__lua.html#1ga8f1634486c510275904618331c9291d0'
    },
    {
      name: 'vrCursorGetTouchedModel',
      brief: 'Gets the first model currently under the mouse cursor',
    ref: 'group__api__lua.html#1ga8f383781fa85c49cab117bd9cdfcc2bc'
    },
    {
      name: 'vrCreateUserInterface',
      brief: 'Create the user interface components from the user interface metanode',
    ref: 'group__api__lua.html#1ga8f447f3c76d74f6db6a9eb5e7bd128d9'
    },
    {
      name: 'vrQuaternionLerp',
      brief: 'Returns the linear interpolation between two quaternions',
    ref: 'group__api__lua.html#1ga8faeef459f192b4964ed808b9153a1b5'
    },
    {
      name: 'vrAddTransformNodeObserver',
      brief: 'Add an observer to the SGNode of a vrtree node',
    ref: 'group__api__lua.html#1ga8fe6bbf12d7a73923de10c30a01b8340'
    },
    {
      name: 'vrArcRadius',
      brief: 'Calculates the radius of an arc',
    ref: 'group__api__lua.html#1ga8fff9e968fae1fe51e3085644b66ead2'
    },
    {
      name: 'vrEnableNodeWhenOculusAvailable',
      brief: 'Makes a button available when an Oculus Rift is connected',
    ref: 'group__api__lua.html#1ga903067556f05305365fec4eae7dbd2fe'
    },
    {
      name: 'vrClusterResetWindows',
      brief: 'DEPRECATED - use vrResetWindows',
    ref: 'group__api__lua.html#1ga9078caf01e2212b9d3a0590f28ba0b41'
    },
    {
      name: 'vrScriptEditorDeleteBackwards',
      brief: 'Deletes a single character from behind the insertion point in the currently visible script editor tab and steps the cursor backwards ',
    ref: 'group__api__lua.html#1ga908b08b1fddfb1bbb1d19eeac11b20d6'
    },
    {
      name: 'vrLaunchProcess',
      brief: 'Launches a command or application asynchronously',
    ref: 'group__api__lua.html#1ga90afe04f38d47bd2e3f0c68f848208fc'
    },
    {
      name: 'vrAddPropertyMat3f',
      brief: 'Adds a new mat3f property to an unfinished metanode',
    ref: 'group__api__lua.html#1ga91396eb00d810e292d5967b72172b012'
    },
    {
      name: 'vrCloseSequence',
      brief: 'Closes the specified sequence in the sequencer window',
    ref: 'group__api__lua.html#1ga9162f67ca09a2731a3670125a0f0beb8'
    },
    {
      name: 'vrBodySetRoll',
      brief: 'Sets the roll of the body',
    ref: 'group__api__lua.html#1ga917c4c7af416d47939813e275cad0644'
    },
    {
      name: 'vrFolderExists',
      brief: 'Returns true if the specified folder exists',
    ref: 'group__api__lua.html#1ga918e39f5d20b2d4d2d6228e8c99b2fd8'
    },
    {
      name: 'vrLength',
      brief: 'Returns the length of a vector',
    ref: 'group__api__lua.html#1ga91f0f6e1e66eeb27b2b7ce896e0ae091'
    },
    {
      name: 'vrShowGUIFrame',
      brief: 'Show or hide a GUI frame',
    ref: 'group__api__lua.html#1ga9312119ac291e2a9aeb48c91f8da4b8c'
    },
    {
      name: 'vrScriptEditorInsertText',
      brief: 'Inserts text into the currently visible script editor tab',
    ref: 'group__api__lua.html#1ga938e3307c1171ee82187ea6db8a85e9a'
    },
    {
      name: 'vrNodeSetPositionY',
      brief: 'Sets the world y position of the node',
    ref: 'group__api__lua.html#1ga94684c7db3d46706fa7d12e47e2a7841'
    },
    {
      name: 'vrNodeSetNoSave',
      brief: 'Specifies whether this node can be saved in a VRText/VRNative file',
    ref: 'group__api__lua.html#1ga9487286fd08f8ffc3f8870f16c8ba127'
    },
    {
      name: 'vrNodeGetLocalBounds',
      brief: 'Gets the local bounding box and sphere of a node',
    ref: 'group__api__lua.html#1ga94f11f3c275b592ada48f80a188d422b'
    },
    {
      name: 'vrFinishMetaNode',
      brief: 'Finishes a metanode ',
    ref: 'group__api__lua.html#1ga95213827322aa390be46b059d0f9c462'
    },
    {
      name: 'vrQuaternionSlerp',
      brief: 'Returns the spherical interpolation between two quaternions',
    ref: 'group__api__lua.html#1ga952d78315f15a1290df725a02b547069'
    },
    {
      name: 'vrHistoryAddMark',
      brief: 'Adds an undo point in to the History',
    ref: 'group__api__lua.html#1ga95317e8ce1548b6132eee3c50d302b87'
    },
    {
      name: 'vrAssemblyLookAt',
      brief: 'Rotates the assembly so that it is looking at the given position',
    ref: 'group__api__lua.html#1ga954484a7a93cc0ca7544b78a43da59e8'
    },
    {
      name: 'vrTreeRoot',
      brief: 'Returns the root node',
    ref: 'group__api__lua.html#1ga95d089efcfa317fe523729cdc9a3c99a'
    },
    {
      name: 'vrLibrariesNode',
      brief: 'Returns the Libraries node the tree',
    ref: 'group__api__lua.html#1ga97203648eafbf7ada396705fd0cd4872'
    },
    {
      name: 'vrAddPropertyVectorDouble',
      brief: 'Adds a new double vector property to an unfinished metanode',
    ref: 'group__api__lua.html#1ga97c535cfb6b53e2a6aa6b785a82702c9'
    },
    {
      name: 'vrNodeSetRotationZ',
      brief: 'Sets the world z rotation of the node',
    ref: 'group__api__lua.html#1ga97d7caf199e0fcd9abf61569f28cf167'
    },
    {
      name: 'vrGetUserOffset',
      brief: 'Gets the offset from the body to the user\'s standing position',
    ref: 'group__api__lua.html#1ga9891ad82e91741c0e6852478d9947062'
    },
    {
      name: 'vrNodeGetNoSave',
      brief: 'Queries whether this node can be saved in a VRText/VRNative file',
    ref: 'group__api__lua.html#1ga999224a7f4d0664509d9587cdd678902'
    },
    {
      name: 'vrShowInTree',
      brief: 'DEPRECATED - use vrSelectNodes',
    ref: 'group__api__lua.html#1ga99abf1b9cc73e2267cc96bdfe86f0f79'
    },
    {
      name: 'vrAddPropertyVec2i',
      brief: 'Adds a new vec2i property to an unfinished metanode',
    ref: 'group__api__lua.html#1ga9a93a6148709737d37d18ed19904e96f'
    },
    {
      name: 'vrHistoryStepBack',
      brief: 'Undoes the history to the previous history mark',
    ref: 'group__api__lua.html#1ga9b00b67e2962becd0a32e057011a9fe9'
    },
    {
      name: 'vrNodeComposeTransform',
      brief: 'Compose the nodes world transform property from seperate position, rotation and scale tables / vectors',
    ref: 'group__api__lua.html#1ga9ba66d81cf86b151b42b9f644d50bc8f'
    },
    {
      name: 'vrClusterPopupScriptWindowAndShow',
      brief: 'DEPRECATED - use vrShowScriptWindow',
    ref: 'group__api__lua.html#1ga9bf53610e313bd376910cf2a75586160'
    },
    {
      name: 'vrGetImporterFileExtensions',
      brief: 'Gets the file extensions associated with an importer plugin',
    ref: 'group__api__lua.html#1ga9cf0e1692b972a0303b8c6d36403d86c'
    },
    {
      name: 'vrSphere',
      brief: 'Returns a sphere',
    ref: 'group__api__lua.html#1ga9d03881340143743150c760906f8d4ad'
    },
    {
      name: 'vrAnnotationCreateComment',
      brief: 'Create a comment on an annotation',
    ref: 'group__api__lua.html#1ga9d57eab889640cd1c3a6832e362bdc3e'
    },
    {
      name: 'vrAddSettingObserver',
      brief: 'Adds an observer of a setting',
    ref: 'group__api__lua.html#1ga9d74a7a10383c5cced0e9574b6829617'
    },
    {
      name: 'vrNodeSetScaleY',
      brief: 'Sets the world y scale of the node',
    ref: 'group__api__lua.html#1ga9d86fd990e3af99468891610be8848a8'
    },
    {
      name: 'vrGetVisRenRevision',
      brief: 'Returns the revision number of Visionary Render being used',
    ref: 'group__api__lua.html#1ga9d90a25f52f8179f523a2e19c942c4cd'
    },
    {
      name: 'vrUserPluginsDir',
      brief: 'Gets the current applications users plug-ins directory',
    ref: 'group__api__lua.html#1ga9e9e14cb024766e269bcbdaaa4f5a812'
    },
    {
      name: 'vrSettingSetCaption',
      brief: 'Assigns a custom caption to a setting, allowing the text displayed in user interface to be different from the setting name',
    ref: 'group__api__lua.html#1ga9ed3949600eede64df5721e6cd989cc4'
    },
    {
      name: 'vrLinkNetwork',
      brief: 'Links to another application instance forming a Peer-To-Peer network',
    ref: 'group__api__lua.html#1ga9edb0c18bf501c92854b2463506afa22'
    },
    {
      name: 'vrNodeForEachChild',
      brief: 'Calls a function for each child of a node',
    ref: 'group__api__lua.html#1ga9f05831e16d0da314f1d6487a4f6cb9d'
    },
    {
      name: 'vrTreeViewSelectionSelectAllSiblings',
      brief: 'Selects all siblings',
    ref: 'group__api__lua.html#1ga9f988ccf1f1a0b493c4259cbc4026d61'
    },
    {
      name: 'vrLoadAvatarFromFile',
      brief: 'Loads an avatar from a file and places it as a child to parent node',
    ref: 'group__api__lua.html#1ga9fbaeebe7512fe807177ae3825aeb000'
    },
    {
      name: 'vrZoomTrackView',
      brief: 'INTERNAL',
    ref: 'group__api__lua.html#1ga9fee9e1bb9f4a62574dd77f0872b077f'
    },
    {
      name: 'vrMetaNodeExists',
      brief: 'Returns true if there is a metanode with the given name',
    ref: 'group__api__lua.html#1gaa0b57e16fdc6f223583e9b0a56be30fe'
    },
    {
      name: 'vrGetForwardVec',
      brief: 'Extracts the forward vector from the inverse of the current view matrix',
    ref: 'group__api__lua.html#1gaa0e93887b6812e4283482cb551a7bff0'
    },
    {
      name: 'vrClusterTriggerRename',
      brief: 'DEPRECATED - use vrTriggerRename',
    ref: 'group__api__lua.html#1gaa123a0ffa79065d121e9787cdec8142f'
    },
    {
      name: 'vrSetScriptIdentifier',
      brief: 'Sets an identifier for the Lua execution',
    ref: 'group__api__lua.html#1gaa1577b33b1a2dc58d498d0acb2c777a9'
    },
    {
      name: 'vrNodeGetBacklinks',
      brief: 'Gets all nodes that link to this node',
    ref: 'group__api__lua.html#1gaa232b35ce823fcb626e3ce522ab497c5'
    },
    {
      name: 'vrEnableNodeWhenConfigModeAvailable',
      brief: 'Makes a button available when the specified mode is avaliable',
    ref: 'group__api__lua.html#1gaa23829d56d7ca44523de6930fb42af01'
    },
    {
      name: 'vrSelectNext',
      brief: 'Navigates to the next selection',
    ref: 'group__api__lua.html#1gaa2837979f681e0565749b058ec89f5f8'
    },
    {
      name: 'vrDescribeNode',
      brief: 'Prints to the log a description of the node, its property names and values',
    ref: 'group__api__lua.html#1gaa2929df6bec5d033c166bd4554c2ff33'
    },
    {
      name: 'vrAnnotationListComments',
      brief: 'Lists all comments in an annotation',
    ref: 'group__api__lua.html#1gaa2c1187b0cb70d71e8670a11589b6ce9'
    },
    {
      name: 'vrAnnotationCreateViewpoint',
      brief: 'Create a viewpoint on an annotation',
    ref: 'group__api__lua.html#1gaa2c30f76bb12acf9efb326c0712f9150'
    },
    {
      name: 'vrAddPropertyMat4d',
      brief: 'Adds a new mat4d property to an unfinished metanode',
    ref: 'group__api__lua.html#1gaa2c44662b3503acecd9f4115891e34d9'
    },
    {
      name: 'vrMatTranslate',
      brief: 'Return M translated by the vector V',
    ref: 'group__api__lua.html#1gaa3dfa79874fab47315dd89d213908f10'
    },
    {
      name: 'vrAddPropertyArrayInt',
      brief: 'Adds a new integer array property to an unfinished metanode',
    ref: 'group__api__lua.html#1gaa3e376c2c32e2f5530154d38de77ff40'
    },
    {
      name: 'vrNodeGetMetaNode',
      brief: 'Gets the name of the MetaNode that a node is an instance of',
    ref: 'group__api__lua.html#1gaa45ca306f6867db84ee2402da5541b59'
    },
    {
      name: 'vrAddPropertyMat4w',
      brief: 'Adds a new mat4w property to an unfinished metanode',
    ref: 'group__api__lua.html#1gaa48065a87443439fb366e6de9e8b822c'
    },
    {
      name: 'vrNodeArrayPop',
      brief: 'Pops a value from the end of an array property',
    ref: 'group__api__lua.html#1gaa4cdb88dffe1649639afc771a89226f1'
    },
    {
      name: 'vrNodeCopyValue',
      brief: 'Copies the value of a property from one node to another of the same MetaNode type',
    ref: 'group__api__lua.html#1gaa5479efd4bdc53e7141e9669c172807a'
    },
    {
      name: 'vrReloadTextures',
      brief: 'Recursively finds texture nodes and reloads the texture data from the associated files',
    ref: 'group__api__lua.html#1gaa59c106f6044fb37c07ac7875f4367ae'
    },
    {
      name: 'vrTriggerRename',
      brief: 'Triggers a node rename in the tree view',
    ref: 'group__api__lua.html#1gaa686b13ca5997e37756edefb9ab4537a'
    },
    {
      name: 'vrNodeGetLocalPositionZ',
      brief: 'Gets the local z position of the node',
    ref: 'group__api__lua.html#1gaa6b7e66e360d20de56c0c4247f85ea3d'
    },
    {
      name: 'vrClusterPopupPropertyWindow',
      brief: 'DEPRECATED - use vrShowPropertyWindow',
    ref: 'group__api__lua.html#1gaa6f770078103299e6db6adf9051ebea1'
    },
    {
      name: 'vrPlaneGetPointDistance',
      brief: 'Returns the distance a point is from the plane',
    ref: 'group__api__lua.html#1gaa70f0c71f4ea0578003e80e6e0b664e2'
    },
    {
      name: 'vrNodeGetLocal',
      brief: 'DEPRECATED',
    ref: 'group__api__lua.html#1gaa7d539cf7160483581b0fac47261ae4e'
    },
    {
      name: 'vrAddToolbarDock',
      brief: 'Adds a docked window to a notebook that toolbars can be added to',
    ref: 'group__api__lua.html#1gaa8ac4082ce32c6ab31433bcfa1519b94'
    },
    {
      name: 'vrCreateSequence',
      brief: 'Adds a child sequence to a selected node or the Scenes node',
    ref: 'group__api__lua.html#1gaaa2d3fce574cccd4687d5acada8bda0a'
    },
    {
      name: 'vrNodeGetChildCount',
      brief: 'Counts the children of a nodevrNodeGetChild and vrNodeGetSibling instead ',
    ref: 'group__api__lua.html#1gaaa87f13bca5a8c9fe8080f19bc0870b4'
    },
    {
      name: 'vrBodyFlyToWorldPos',
      brief: 'Flies the body to a specific position and rotation, over time seconds',
    ref: 'group__api__lua.html#1gaaae36c7af82c31115d851772abd8e520'
    },
    {
      name: 'vrSetTrackedEyeNode',
      brief: 'Sets the tracked eye to the specified node',
    ref: 'group__api__lua.html#1gaab760a4daaba6e6bb656c190e4c23f35'
    },
    {
      name: 'vrQuaternionDot',
      brief: 'Returns the dot product of two quaternions',
    ref: 'group__api__lua.html#1gaac286d64a555cfb88b7b0a742235eb3a'
    },
    {
      name: 'vrVec4',
      brief: 'Returns a 4 dimensional vector',
    ref: 'group__api__lua.html#1gaac959ac6cc052a2e4c21d59acffcb93e'
    },
    {
      name: 'vrNodeSetPositionX',
      brief: 'Sets the world x position of the node',
    ref: 'group__api__lua.html#1gaad51feba27bc44c8cbb18e72e9bef76b'
    },
    {
      name: 'vrNodeGetLocalScale',
      brief: 'Gets the local scale of the node',
    ref: 'group__api__lua.html#1gaad8e6499511ccbdfc90d6523794942d6'
    },
    {
      name: 'vrNodeSetLocalPosition',
      brief: 'Sets the local position of the node',
    ref: 'group__api__lua.html#1gaae063f1448909a550312037f2486d643'
    },
    {
      name: 'vrMatGetValue',
      brief: 'Get the value of an element of a matrix',
    ref: 'group__api__lua.html#1gaae4a4ee64eec15f7c997ada4e6500f13'
    },
    {
      name: 'vrNodeIsLocal',
      brief: 'Query whether the specified node belongs to the local network user',
    ref: 'group__api__lua.html#1gaae648dfe2f7304f9de3aef817ef162d2'
    },
    {
      name: 'vrNodeSetPosition',
      brief: 'Sets the world position of the node',
    ref: 'group__api__lua.html#1gaaf657b5ebe1f2b501afa46eeb145f71a'
    },
    {
      name: 'vrNodeGetNoSimulation',
      brief: 'Queries whether this node can be affected by simulations, such as physics and collision',
    ref: 'group__api__lua.html#1gaafb387a8d9769724dd56ccd86dd5296a'
    },
    {
      name: 'vrMessageBox',
      brief: 'Displays a message box to the user',
    ref: 'group__api__lua.html#1gaafc49f447a3b3ba35f7faec9845e497b'
    },
    {
      name: 'vrMatToString',
      brief: 'Get a string representation of a matrix',
    ref: 'group__api__lua.html#1gab014a24d1068ec66a3ee8cdbe595966a'
    },
    {
      name: 'vrViewInvTransformVec',
      brief: 'Transforms a vector by the inverse of the current view matrix',
    ref: 'group__api__lua.html#1gab07db595ae343a212c528da773a3e439'
    },
    {
      name: 'vrIsStereoAvailable',
      brief: 'Returns true if stereo 3D is available in the current instance of Visionary Render',
    ref: 'group__api__lua.html#1gab11547ffea39bcc565401c0be63e7f83'
    },
    {
      name: 'vrMat4Frustum',
      brief: 'Return a frustum projection matrix',
    ref: 'group__api__lua.html#1gab153977f4d683510674d3e3a45a125d6'
    },
    {
      name: 'vrSettingGet',
      brief: 'Gets an application setting from the user registry, or a scene override if it exists',
    ref: 'group__api__lua.html#1gab22c36c57d73c7b8ce67e5369fdf452f'
    },
    {
      name: 'vrCreateViewpoint',
      brief: 'Creates a viewpoint at the current camera position',
    ref: 'group__api__lua.html#1gab22e56190a6cba996e90dc7f84c2322d'
    },
    {
      name: 'vrScriptEditorDeleteForwards',
      brief: 'Deletes a single character at the insertion point in the currently visible script editor tab and leaves the insertion point where it is ',
    ref: 'group__api__lua.html#1gab28c261054d3da95a2bf437bd6f31a20'
    },
    {
      name: 'vrPolarToDegrees',
      brief: 'Convert polar coordinates to degrees',
    ref: 'group__api__lua.html#1gab30cb3865beb9e559f0523a7a98dfefc'
    },
    {
      name: 'vrAddPropertyMat3w',
      brief: 'Adds a new mat3w property to an unfinished metanode',
    ref: 'group__api__lua.html#1gab36800d03d23b5d7bcd545f12753e080'
    },
    {
      name: 'vrSetIconToTexture',
      brief: 'Sets the browser icon for a node to a texture',
    ref: 'group__api__lua.html#1gab3c12256acdcab8d6375ee78cf8debd7'
    },
    {
      name: 'vrPastePropagateLink',
      brief: 'Pastes the nodes on the clipboard as a link into all matching nodes and target properties',
    ref: 'group__api__lua.html#1gab4326bb32a0e2c33106724ee453e5e16'
    },
    {
      name: 'vrSettingCreateBool',
      brief: 'Creates a new boolean user setting',
    ref: 'group__api__lua.html#1gab522d91ba487b6a5d408aff4d1dd7a5b'
    },
    {
      name: 'vrTreeSelect',
      brief: 'Selects the specified node in the specified view ',
    ref: 'group__api__lua.html#1gab5863d793b8bad2c3cc2cf646d31f7f1'
    },
    {
      name: 'vrNodeGetLocalPositionY',
      brief: 'Gets the local y position of the node',
    ref: 'group__api__lua.html#1gab5cf02795fc98ce005af186a36bd312a'
    },
    {
      name: 'vrAppCommandAdd',
      brief: 'Adds an app command and binds a lua function call to it',
    ref: 'group__api__lua.html#1gab5df245a8428b5cb2f50035e8c22842f'
    },
    {
      name: 'vrProgressEvents',
      brief: 'Create Nodes under user tree to indicate when progress events are occuring',
    ref: 'group__api__lua.html#1gab5f90863ace5808757853cafbcfff911'
    },
    {
      name: 'vrMatScale',
      brief: 'Return M scaled by vector V',
    ref: 'group__api__lua.html#1gab619b99543a34eee23a8551e26abadc6'
    },
    {
      name: 'vrNodeArraySetSize',
      brief: 'Sets the size of an array property',
    ref: 'group__api__lua.html#1gab62f24548077657f8658e18a7173dfcf'
    },
    {
      name: 'vrMakeEllipsoid',
      brief: 'Creates an ellipsoid shape',
    ref: 'group__api__lua.html#1gab6434a7102c60c3a1e0efe7c50487e25'
    },
    {
      name: 'vrPlane',
      brief: 'Returns a plane',
    ref: 'group__api__lua.html#1gab67085784c7dfb4b386a444498cb67f5'
    },
    {
      name: 'vrBodyStepBack',
      brief: 'Steps back to the previous viewport or camera position',
    ref: 'group__api__lua.html#1gab6897493fb9f1ffb3f07622cf62307d3'
    },
    {
      name: 'vrSettingSetFilter',
      brief: 'Assigns a filter to a setting',
    ref: 'group__api__lua.html#1gab6b9d7c74e26e4a44cc5bb3b91a834e9'
    },
    {
      name: 'vrNodeGetLocalRotationX',
      brief: 'Gets the local x rotation of the node',
    ref: 'group__api__lua.html#1gab720d46ddb97bafb8dd08f2d4ccb695c'
    },
    {
      name: 'vrNodeHasTrait',
      brief: 'Checks if the node is of a type with a specific trait',
    ref: 'group__api__lua.html#1gab73f492f1b0bd01e5dee546ee3f1bc85'
    },
    {
      name: 'vrProjTransformVec',
      brief: 'Transforms a vector by the current projection matrix',
    ref: 'group__api__lua.html#1gab83a251bec9d86052802d746c516d811'
    },
    {
      name: 'vrProjInvTransformVec',
      brief: 'Transforms a vector by the inverse of the current projection matrix',
    ref: 'group__api__lua.html#1gab89b733e4c3c6ec71f8d0ac8a094cfb2'
    },
    {
      name: 'vrDot',
      brief: 'Returns the dot product of two vectors',
    ref: 'group__api__lua.html#1gab8c3f92f4e64509fd23a2000127ee5ec'
    },
    {
      name: 'vrCross',
      brief: 'Returns the cross product of two vectors',
    ref: 'group__api__lua.html#1gab977951c6fa6246aa37ea78d54366fc9'
    },
    {
      name: 'vrMatRotateEulerY',
      brief: 'Return M rotated on the Y axis by angle V',
    ref: 'group__api__lua.html#1gab98d958d6646a7931a1078c6f4c20257'
    },
    {
      name: 'vrShowNodeProperties',
      brief: 'Pops up the application property editor for the specified view selection',
    ref: 'group__api__lua.html#1gab9befe35073ca5ba102c1380c82b9fe7'
    },
    {
      name: 'vrShouldSaveCamera',
      brief: 'Returns true if the camera position should be saved into documents',
    ref: 'group__api__lua.html#1gabb507b723c14a034d13b33c81484437f'
    },
    {
      name: 'vrNodeGetPositionY',
      brief: 'Gets the world y position of the node',
    ref: 'group__api__lua.html#1gabb6674392ccf5cc0263b5292d41bf777'
    },
    {
      name: 'vrScriptEditorGetInsertPos',
      brief: 'Gets the text insert cursor position in the currently visible script editor tab',
    ref: 'group__api__lua.html#1gabb9d66d9dcffeda71b6848b94027c9c8'
    },
    {
      name: 'vrExtractBinaryAssets',
      brief: 'Extracts binary data from texture or audio nodes',
    ref: 'group__api__lua.html#1gabb9fafbea01c3dfd9fd37c27b7e83386'
    },
    {
      name: 'vrNodeGetSibling',
      brief: 'Gets the sibling ',
    ref: 'group__api__lua.html#1gabc2290accd46ad7398eff98847bffa16'
    },
    {
      name: 'vrAnnotationDelete',
      brief: 'Delete an annotation and all associated comments and viewpoints',
    ref: 'group__api__lua.html#1gabd89dc73851605d8849e429bab8fc9b7'
    },
    {
      name: 'vrAddPropertyVectorWorldFloat',
      brief: 'Adds a new world float vector property to an unfinished metanode',
    ref: 'group__api__lua.html#1gabdd264dc1bec9c2a92b4e2284592741d'
    },
    {
      name: 'vrToggleGUIEnabled',
      brief: 'Toggles the visibility of the windows over the 3D scene',
    ref: 'group__api__lua.html#1gabeac1b99be4aef409594f93e9613ed23'
    },
    {
      name: 'vrCopy',
      brief: 'Returns a copy of a Vector, Matrix, Ray, Sphere, AABBox, Quaternion or Plane',
    ref: 'group__api__lua.html#1gabebf699c26e5e3a9dc46012b57b523cd'
    },
    {
      name: 'vrMakeArrow',
      brief: 'Creates an arrow shape',
    ref: 'group__api__lua.html#1gabf0120ab9fac541c5c700840277d3b57'
    },
    {
      name: 'vrCursorGetTouchedAssembly',
      brief: 'Gets the first assembly currently under the mouse cursor',
    ref: 'group__api__lua.html#1gabf13679b5df37456914166f8e48af445'
    },
    {
      name: 'vrHSV2RGB',
      brief: 'Converts a HSV coiour ',
    ref: 'group__api__lua.html#1gabf1fad5725e84e60c2e2f39ff169a6dc'
    },
    {
      name: 'vrNodeSetLocalRotationX',
      brief: 'Sets the local x rotation of the node',
    ref: 'group__api__lua.html#1gabf39729723c993526fd4dcc629f9a1fe'
    },
    {
      name: 'vrDeleteUnreferenced',
      brief: 'Recursively deletes all unreferenced nodes in this branch',
    ref: 'group__api__lua.html#1gabfa43eb5d121f9e1866e09f451ed3563'
    },
    {
      name: 'vrGroupHasNodeOfType',
      brief: 'Checks whether a group contains a node of a specified type',
    ref: 'group__api__lua.html#1gac017abed7e3d5d5f2136373b64b44a0b'
    },
    {
      name: 'vrScriptEditorSetMarkPos',
      brief: 'Sets the text mark cursor position in the currently visible script editor tab',
    ref: 'group__api__lua.html#1gac0f223ce4eb9bee89ad9aaef5094ae84'
    },
    {
      name: 'vrNodeGetRelativePath',
      brief: 'Gets the encoded path to a node, relative to another node',
    ref: 'group__api__lua.html#1gac0fdc5c1d108e8cd90368a46440585ac'
    },
    {
      name: 'vrAddPropertyInt',
      brief: 'Adds a new integer property to an unfinished metanode',
    ref: 'group__api__lua.html#1gac13b313af12fb67353692801ad7119f9'
    },
    {
      name: 'vrNodeSetLocal',
      brief: 'DEPRECATED',
    ref: 'group__api__lua.html#1gac218347b840570b63695114ee15862d9'
    },
    {
      name: 'vrPushRecentFile',
      brief: 'Adds a file to the end of the list of recent files and its folder to the end of the list of recent folders',
    ref: 'group__api__lua.html#1gac30d9d5f2b8c2c7c2b044f9c70755a62'
    },
    {
      name: 'vrNodeGetLocalBoundingBox',
      brief: 'Gets the local bounding box of a node',
    ref: 'group__api__lua.html#1gac315b5fbe54826865217b9bda859238f'
    },
    {
      name: 'vrNodeSetScale',
      brief: 'Sets the world scale fo the noed',
    ref: 'group__api__lua.html#1gac3208dc3dcb9744ecd1ee0bfebd00d8b'
    },
    {
      name: 'vrSettingWrite',
      brief: 'Writes the value of a setting',
    ref: 'group__api__lua.html#1gac338c393256271fa5851d0a6982e2804'
    },
    {
      name: 'vrAnnotationEditCommentText',
      brief: 'Activates an interactive editor for editing an annotation comment',
    ref: 'group__api__lua.html#1gac4ca1edfd313594abe5f0e7c3f057609'
    },
    {
      name: 'vrAddPropertyObserver',
      brief: 'Adds an observer of one or more properties of a metanode',
    ref: 'group__api__lua.html#1gac54574419ef434fa83bce4a77b1e3f9d'
    },
    {
      name: 'vrBodySetAng',
      brief: 'Sets the orientation of the body',
    ref: 'group__api__lua.html#1gac5ae57d200506c9d1163621a26ca439b'
    },
    {
      name: 'vrNodeCaptureTransform',
      brief: 'Captures the transform of a node, overwriting any existing saved transform',
    ref: 'group__api__lua.html#1gac5b6d7befa831714bdb568ea8aa26f43'
    },
    {
      name: 'vrEnableNodeWhenOpenVRAvailable',
      brief: 'Makes a button available when an OpenVR HMD is connected',
    ref: 'group__api__lua.html#1gac62a32d48afc86a056b645b9a1c7c713'
    },
    {
      name: 'vrProgressEnd',
      brief: 'Ends the progress display',
    ref: 'group__api__lua.html#1gac6a7754a919799cf8e98fa75d1187358'
    },
    {
      name: 'vrAddPropertyArrayChar',
      brief: 'Adds a new character array property to an unfinished metanode',
    ref: 'group__api__lua.html#1gac6c2fe80323aea7b1a5148dbbd959b60'
    },
    {
      name: 'vrMatOrthoNormalise',
      brief: 'Returns an orthogonal matrix',
    ref: 'group__api__lua.html#1gac6d9284e2f0c14a1712591e6582ec821'
    },
    {
      name: 'vrGetLastOpenDir',
      brief: 'Returns the last directory selected',
    ref: 'group__api__lua.html#1gac728911a42856f75ec67489d987a8f71'
    },
    {
      name: 'vrNodeGetTraits',
      brief: 'Gets the list of traits that this node has',
    ref: 'group__api__lua.html#1gac7b6f13a2975b23113088c07c461cd76'
    },
    {
      name: 'vrSettingSetType',
      brief: 'Assigns a type to a setting, which determines how the setting is presented in the user interface',
    ref: 'group__api__lua.html#1gac7e71b22f0cbbde42e60250fbc4d4188'
    },
    {
      name: 'vrConfigModeAvailable',
      brief: 'Returns true or false if the specified mode is available',
    ref: 'group__api__lua.html#1gac82b8eae865126e8405df4d1c9ff998c'
    },
    {
      name: 'vrBitsToInteger',
      brief: 'Converts boolean values to an integer',
    ref: 'group__api__lua.html#1gac8981f6e471aefd5b72f527f3eb70c14'
    },
    {
      name: 'vrGalleryRequestImport',
      brief: 'Imports a file using an importer registered with the gallery',
    ref: 'group__api__lua.html#1gac8afede18f0e43c77c5ffc0636cc528a'
    },
    {
      name: 'vrScriptEditorGetMarkPos',
      brief: 'Gets the text mark cursor position in the currently visible script editor tab',
    ref: 'group__api__lua.html#1gaca2dcf97d42e2e0a86949bf70771bf5c'
    },
    {
      name: 'vrMat3',
      brief: 'Return an identity 3x3 Matrix',
    ref: 'group__api__lua.html#1gaca3228ec01e1d35e9dff4ab9b09f41fe'
    },
    {
      name: 'vrNodeSetLocalRotationY',
      brief: 'Sets the local y rotation of the node',
    ref: 'group__api__lua.html#1gacaad6873139c2a2da43541555d11dc6d'
    },
    {
      name: 'vrAnnotationListViewpoints',
      brief: 'Lists all viewpoints in an annotation',
    ref: 'group__api__lua.html#1gacb6ff4943820c03631bb7ecb42e40dbf'
    },
    {
      name: 'vrNodeGetParent',
      brief: 'Gets the parent of a node',
    ref: 'group__api__lua.html#1gacbc745c8c1710463b5da6ce54338f786'
    },
    {
      name: 'vrPositionAtBody',
      brief: 'Moves a node to the user\'s current position and orientation',
    ref: 'group__api__lua.html#1gacbe07eec485a52f8d4c8f52421a35907'
    },
    {
      name: 'vrWitnessSetModel',
      brief: 'INTERNAL',
    ref: 'group__api__lua.html#1gacbf7392878ae70ae01c0f8cc4cd8bffc'
    },
    {
      name: 'vrReleaseObjectFromTrackedHand',
      brief: 'Releases a node attached to the hand',
    ref: 'group__api__lua.html#1gacc25a7074335b6fb811fa082c7a1e0c5'
    },
    {
      name: 'vrAddPropertyMat3d',
      brief: 'Adds a new mat3d property to an unfinished metanode',
    ref: 'group__api__lua.html#1gacc3f33084aad0c6c73b74b12107993aa'
    },
    {
      name: 'vrAABoxPosAndSize',
      brief: 'Construct an axis aligned bounding box, using a position and a size',
    ref: 'group__api__lua.html#1gacc6064a18deccef90bad3d262adab519'
    },
    {
      name: 'vrNodeSetRotationX',
      brief: 'Sets the world x rotation of the node',
    ref: 'group__api__lua.html#1gacccb1b1f5a0f3c0fd99105d75150e8a0'
    },
    {
      name: 'vrNodeIsMetaFiltered',
      brief: 'Returns true if the node\'s meta type is filtered in the specified view',
    ref: 'group__api__lua.html#1gacd1289e18471b865d49960a53fbbf0b1'
    },
    {
      name: 'vrPasteAsChild',
      brief: 'Pastes the contents of the clipboard as a child to the target node',
    ref: 'group__api__lua.html#1gacd30b76aad193397f38c6eb257e6c269'
    },
    {
      name: 'vrBodyClearImpulse',
      brief: 'Resets the delta of the camera',
    ref: 'group__api__lua.html#1gacd73cb4d21cedb0a8a75cf8b084b723b'
    },
    {
      name: 'vrUserDocumentsDir',
      brief: 'Gets the current user\'s documents directory',
    ref: 'group__api__lua.html#1gacdd808f2ef4374132940917cb3dc0847'
    },
    {
      name: 'vrNodeSetLocalScaleX',
      brief: 'Sets the local x scale of the node',
    ref: 'group__api__lua.html#1gace32b7aa755ac46bf6195bf99be33124'
    },
    {
      name: 'vrClusterShowInTreeViewFrame',
      brief: 'DEPRECATED - use vrSelectNodes',
    ref: 'group__api__lua.html#1gace674e49d6d09cbc1ee072e06ed2be7f'
    },
    {
      name: 'vrAddPropertyMat4f',
      brief: 'Adds a new mat4f property to an unfinished metanode',
    ref: 'group__api__lua.html#1gace87e4db6a65e4db07b429c3f4d77489'
    },
    {
      name: 'vrAnnotationDeleteViewpoint',
      brief: 'Delete a viewpoint from an annotation',
    ref: 'group__api__lua.html#1gace9db188490b5c18932aec2840c31adf'
    },
    {
      name: 'vrAddPropertyLink',
      brief: 'Adds a new link property to an unfinished metanode',
    ref: 'group__api__lua.html#1gacfb4816ce8ad9addfac087386221ba40'
    },
    {
      name: 'vrTreeControlRangeSelect',
      brief: 'Selects or deselects all nodes between the specified node and the last selected node without affecting the rest of the selection',
    ref: 'group__api__lua.html#1gacfb4b652507ab1362715ecac42612264'
    },
    {
      name: 'vrNodeSetScaleZ',
      brief: 'Sets the world z scale of the node',
    ref: 'group__api__lua.html#1gad1b3e8afb1e30e20ed4bc74645b8ed48'
    },
    {
      name: 'vrNodeDecomposeLocalTransform',
      brief: 'Decomposes the nodes local transform property into seperate postion, rotation and scale tables / vectors',
    ref: 'group__api__lua.html#1gad1fa10edf6204a895cee99cbf1cdc77c'
    },
    {
      name: 'vrShowNextSelection',
      brief: 'Navigates to the next selection and shows the properties of the nodes',
    ref: 'group__api__lua.html#1gad2440121babb19dd0b72dc8faa946bd2'
    },
    {
      name: 'vrHasPermission',
      brief: 'Queries whether or not we have a named permission',
    ref: 'group__api__lua.html#1gad34fbadca828743abc0568baaa7e7675'
    },
    {
      name: 'vrPlaneTransform',
      brief: 'Returns a plane transformed by a matrix',
    ref: 'group__api__lua.html#1gad3ced8524a672d1cc0012a79f361fd7c'
    },
    {
      name: 'vrAddNodeObserver',
      brief: 'Adds an observer of events from a node',
    ref: 'group__api__lua.html#1gad485b003fd03b3cbf6296606f75db719'
    },
    {
      name: 'vrSelectHistoryEntry',
      brief: 'Navigates to an entry in the selection history',
    ref: 'group__api__lua.html#1gad4edbb98504cb40ea1a1916613c0459f'
    },
    {
      name: 'vrAddPropertyVectorFloat',
      brief: 'Adds a new float vector property to an unfinished metanode',
    ref: 'group__api__lua.html#1gad4f8d7fc4af7a9bdee9247f8ac02382f'
    },
    {
      name: 'vrTreeViewSelectionSelectInvert',
      brief: 'Inverts selection',
    ref: 'group__api__lua.html#1gad693fd9a227b3377b453a0a05e1cd820'
    },
    {
      name: 'vrGetImporterList',
      brief: 'Gets the names of all installed data importer plugins',
    ref: 'group__api__lua.html#1gad710ac06ad0818ddd80c49e0cf27e102'
    },
    {
      name: 'vrAddPropertyVec3w',
      brief: 'Adds a new vec3w property to an unfinished metanode',
    ref: 'group__api__lua.html#1gad7a307d2a70161f2ee970a36c0a34bb8'
    },
    {
      name: 'vrAnnotationDeleteComment',
      brief: 'Delete a comment from an annotation',
    ref: 'group__api__lua.html#1gad7ef5cfb97eedd38db9ac42245e01311'
    },
    {
      name: 'vrShowGalleryType',
      brief: 'Shows a type in the gallery window',
    ref: 'group__api__lua.html#1gad878bee9c18dad23c5900680012c6903'
    },
    {
      name: 'vrTreeViewSelectionCollapse',
      brief: 'Collapses the current selection',
    ref: 'group__api__lua.html#1gad8a531e9e607460269528cec0062171c'
    },
    {
      name: 'vrAddPropertyVectorInt',
      brief: 'Adds a new integer vector property to an unfinished metanode',
    ref: 'group__api__lua.html#1gad8cfc256cdc2a03cd1dfc3cecd7177a2'
    },
    {
      name: 'vrAnnotationListAll',
      brief: 'Lists all annotations in the scene',
    ref: 'group__api__lua.html#1gad9112ce137697bb0d8d6a8f35d77b439'
    },
    {
      name: 'vrSystemLibsNode',
      brief: 'Returns the SystemsLib node from the tree',
    ref: 'group__api__lua.html#1gad986a792e74e6aed8918be91625b2454'
    },
    {
      name: 'vrTreeViewSelectionSelectChildren',
      brief: 'Selects children',
    ref: 'group__api__lua.html#1gad9a306e742efe65d4619036c2e634719'
    },
    {
      name: 'vrNetworkSetRetryConnect',
      brief: 'Sets whether failed calls to vrLinkNetwork should retry until the user manual aborts them',
    ref: 'group__api__lua.html#1gada2b07c5e0467437194b336b487e6e52'
    },
    {
      name: 'vrNodeGetNoHistory',
      brief: 'Queries whether this node can be recorded in the history for undo/redo operations',
    ref: 'group__api__lua.html#1gadb588ab37ef3cf1de26e60b849cbee45'
    },
    {
      name: 'vrBodySetOrbitPoint',
      brief: 'Sets the camera\'s orbit point',
    ref: 'group__api__lua.html#1gadb90779ded9898d8ac5ff2d1bc09fa88'
    },
    {
      name: 'vrGetOrCreateNode',
      brief: 'Gets an existing node or creates one ',
    ref: 'group__api__lua.html#1gadb998db0d68af658b62fa44df409182c'
    },
    {
      name: 'vrNodeGetLocallyModified',
      brief: 'Queries whether or not this node\'s last modification was made by the local visionary render instance',
    ref: 'group__api__lua.html#1gadbc36c7384c6421f0afbdb786da99a2c'
    },
    {
      name: 'vrAddEventObserver',
      brief: 'Adds an observer and callback function to execute for events ',
    ref: 'group__api__lua.html#1gadc17e7a64c8928bc3ab979953f9fd7f3'
    },
    {
      name: 'vrNodeArraySet',
      brief: 'Sets the values of an array property to a new array',
    ref: 'group__api__lua.html#1gadc44174dc266d68e6115aa8f60a143ef'
    },
    {
      name: 'vrPlaneRayIntersect',
      brief: 'Returns how far along the ray an intersection point with this plane is',
    ref: 'group__api__lua.html#1gadcf4c5252ce2e2bf939e202c1bb647ff'
    },
    {
      name: 'vrRescalePRSManipulator',
      brief: 'Refreshes the scale of the PRS manipulator',
    ref: 'group__api__lua.html#1gadd131743fc356ec62e8bb58950a6bd70'
    },
    {
      name: 'vrSettingGetSceneRoot',
      brief: 'Gets the root of the settings overrides in the scenes tree if it exists',
    ref: 'group__api__lua.html#1gaddc7be6b25d368e68df5d1155ff29bea'
    },
    {
      name: 'vrViewTransformVec',
      brief: 'Transforms a vector by the current view matrix',
    ref: 'group__api__lua.html#1gadde3b4be9f52f9988ae3734c54e21414'
    },
    {
      name: 'vrShowScriptWindow',
      brief: 'Pops up the application script editor for the specified script node',
    ref: 'group__api__lua.html#1gade1abb062464f0a516d081bed56e8fda'
    },
    {
      name: 'vrClusterSelectAndShowProperties',
      brief: 'DEPRECATED - use vrSelectNodes',
    ref: 'group__api__lua.html#1gade6c0f0b2ac0c3d51c420cab629ce550'
    },
    {
      name: 'vrNodeGetRelativeTransform',
      brief: 'Gets the position, rotation and scale of the world transform of one node relative to another',
    ref: 'group__api__lua.html#1gade97d1ea893a8d597315006293084276'
    },
    {
      name: 'vrNodeSetName',
      brief: 'Sets the name of a node',
    ref: 'group__api__lua.html#1gaded9c73323b4e13b6bdfdc19b80180be'
    },
    {
      name: 'vrClusterMaster',
      brief: 'Returns true if the local user is a cluster master',
    ref: 'group__api__lua.html#1gadedf9bf76f9b52a6039dd4655e3fc816'
    },
    {
      name: 'vrBodyFlyTo',
      brief: 'Flies the body to the world position of node, over time seconds',
    ref: 'group__api__lua.html#1gadee4a054c35bb6ad72b37404651b924d'
    },
    {
      name: 'vrNodeGetLocalScaleZ',
      brief: 'Gets the local z scale of the node',
    ref: 'group__api__lua.html#1gadf13e5c60ff4ec6e4ca733a62871ecb8'
    },
    {
      name: 'vrImportAssetLibrary',
      brief: 'Imports an asset library',
    ref: 'group__api__lua.html#1gadf52718f4530e9874a741d0b059b49c1'
    },
    {
      name: 'vrIsDebugBuild',
      brief: 'Returns true if the DEBUG compilation flag was defined',
    ref: 'group__api__lua.html#1gadf7727394e1cea602d20dc6e6c223ee8'
    },
    {
      name: 'vrPasteAsChildToSelection',
      brief: 'Pastes the contents of the clipboard as a child to the selection group',
    ref: 'group__api__lua.html#1gadf954e07a2a260e69aca17a42d54403e'
    },
    {
      name: 'vrMat4',
      brief: 'Return an identity 4x4 Matrix',
    ref: 'group__api__lua.html#1gae04b9011a060143f84d94c4636a78563'
    },
    {
      name: 'vrTreeViewSelectionSelectParent',
      brief: 'Selects parent',
    ref: 'group__api__lua.html#1gae06776bd5e0b217dd6500277fb83d763'
    },
    {
      name: 'vrNodeGetLocalRotationY',
      brief: 'Gets the local y rotation of the node',
    ref: 'group__api__lua.html#1gae0999df609080658a1bcf042f14ead26'
    },
    {
      name: 'vrCopySelectionToClipboard',
      brief: 'Copies the specified selection group to the clipboard',
    ref: 'group__api__lua.html#1gae194ce4e4f8280d99bc07a54412e408a'
    },
    {
      name: 'vrAddPropertyVec3i',
      brief: 'Adds a new vec3i property to an unfinished metanode',
    ref: 'group__api__lua.html#1gae1b53c78afb81acebbf3ecc6a10a1ade'
    },
    {
      name: 'vrListExports',
      brief: 'List all Lua VR extension functions',
    ref: 'group__api__lua.html#1gae2149ae45d9f396ad117f1d82cde7e8d'
    },
    {
      name: 'vrAddPropertyWorldFloat',
      brief: 'Adds a new world float property to an unfinished metanode',
    ref: 'group__api__lua.html#1gae2ef22093117e9522dbe500cb4bd253d'
    },
    {
      name: 'vrBodyAddImpulse',
      brief: 'Applies delta to the camera as if the mouse was used to move it',
    ref: 'group__api__lua.html#1gae3bb577ab6cf1bc5b089ff4fe3ae04ab'
    },
    {
      name: 'vrGetAllDocHelp',
      brief: 'Gets the entire Lua API reference, either to a string or a file',
    ref: 'group__api__lua.html#1gae3e5243ba477996971e2f5b3b2aca934'
    },
    {
      name: 'vrBodyStepForward',
      brief: 'Steps forward to the next viewport or camera position',
    ref: 'group__api__lua.html#1gae41b5a9e3808b1ebb2088353e0e8614e'
    },
    {
      name: 'vrRequestLoadFile',
      brief: 'Invokes a dialog to load a file',
    ref: 'group__api__lua.html#1gae47a4c134bf89cbe76daafb6f6395226'
    },
    {
      name: 'vrAnnotationPrev',
      brief: 'Flies to and returns the previous annotation before the currently active one',
    ref: 'group__api__lua.html#1gae4cffa53ced61192f7393077033eff6a'
    },
    {
      name: 'vrDeleteNode',
      brief: 'Deletes a node and, if present, its children',
    ref: 'group__api__lua.html#1gae4fd03b648159aa7f248458fe3e1f109'
    },
    {
      name: 'vrGroupsRoot',
      brief: 'Gets the Groups root node under the Scenes tree',
    ref: 'group__api__lua.html#1gae50dc737c04ca6481e45db0a73d9d3be'
    },
    {
      name: 'vrGetClipboardNode',
      brief: 'Returns the node containing the clipboard content, or nil if nothing is on the clipboard',
    ref: 'group__api__lua.html#1gae535e32d9fbbef96c76f4c4e68b56356'
    },
    {
      name: 'vrRemoveTransformLimits',
      brief: 'Removes the TransformLimits on a node',
    ref: 'group__api__lua.html#1gae549899e7b0ddd704a3a591634ac4460'
    },
    {
      name: 'vrGetLastClickedCursorPosition',
      brief: 'Get the position of the cursor when the mouse was last clicked',
    ref: 'group__api__lua.html#1gae5750404d7e1867275d91bfdc9839387'
    },
    {
      name: 'vrNodeSetLocalMatrix',
      brief: 'DEPRECATED',
    ref: 'group__api__lua.html#1gae6abdf0b781bb40672c432c9229f99a3'
    },
    {
      name: 'vrRemoveObserver',
      brief: 'Removes an observer',
    ref: 'group__api__lua.html#1gae6e7242786fac62ef57c146fd0713d9e'
    },
    {
      name: 'vrNodeGetLocalMatrix',
      brief: 'DEPRECATED',
    ref: 'group__api__lua.html#1gae7637d5af2e0a130f00d0496a45249d1'
    },
    {
      name: 'vrToggleToolEnabled',
      brief: 'Toggles the Enabled state of a named Tool',
    ref: 'group__api__lua.html#1gae7e76cfbea5347bd26a7a569eb483ac2'
    },
    {
      name: 'vrShowSequence',
      brief: 'Shows the specified sequence in the sequencer window',
    ref: 'group__api__lua.html#1gae8582fb1ce31ece830de8f57a030b24f'
    },
    {
      name: 'vrSettingCreateFloat',
      brief: 'Creates a new float user setting',
    ref: 'group__api__lua.html#1gae87d34aa6647d094d10d4aa5c3d487ae'
    },
    {
      name: 'vrPasteAsLinkToSelection',
      brief: 'Pastes the nodes on the clipboard as a link into the target property of the specified selection group',
    ref: 'group__api__lua.html#1gae8c42125905985baa77bffb60c3739fb'
    },
    {
      name: 'vrArrange',
      brief: 'Arranges assemblies into a grid based on their bounds',
    ref: 'group__api__lua.html#1gae8df2570814c85cd9be190d357cae67f'
    },
    {
      name: 'vrShouldShowPropertyWindow',
      brief: 'DEPRECATED',
    ref: 'group__api__lua.html#1gae9035f7aecf7de65e636c6e23f85bfbf'
    },
    {
      name: 'vrApproxEquals',
      brief: 'Returns whether or not two items are approximately equal',
    ref: 'group__api__lua.html#1gae99d59a3d20f43f3c4fb9ba2c5e0819c'
    },
    {
      name: 'vrAddPropertyFloat',
      brief: 'Adds a new float property to an unfinished metanode',
    ref: 'group__api__lua.html#1gae9dbef6f2a5bf7fb8b7698240e510d7f'
    },
    {
      name: 'vrNodeSetWorldTransform',
      brief: 'DEPRECATED',
    ref: 'group__api__lua.html#1gae9dca67667837ba9555030377603ef6e'
    },
    {
      name: 'vrMat4Ortho2D',
      brief: 'Return a 2D orthographic projection matrix',
    ref: 'group__api__lua.html#1gaea0a1d9f0d60dac2f9854558263416e2'
    },
    {
      name: 'vrSplitFilePath',
      brief: 'Returns file directory, name, and extension',
    ref: 'group__api__lua.html#1gaea37d1b49b30718c259d42e2b9fa037f'
    },
    {
      name: 'vrLoadPlugin',
      brief: '',
    ref: 'group__api__lua.html#1gaea6a27a9b4e108b565c9ead6909083f2'
    },
    {
      name: 'vrNodeGetAncestor',
      brief: 'Gets the first ancestor of the specified type',
    ref: 'group__api__lua.html#1gaeb2963c680970a13e1d00f3f5f8014b7'
    },
    {
      name: 'vrNodeArrayGetSize',
      brief: 'Gets the size of an array property',
    ref: 'group__api__lua.html#1gaecced17566563dea33afdee1e6fed48a'
    },
    {
      name: 'vrAddPropertyVec2d',
      brief: 'Adds a new vec2d property to an unfinished metanode',
    ref: 'group__api__lua.html#1gaed2f322ae5bdef4bf1dc00ea191dcc0b'
    },
    {
      name: 'vrYield',
      brief: 'Yields the Lua execution back to the application for the ',
    ref: 'group__api__lua.html#1gaf006dd0b9b28944df930a54119c6e7c2'
    },
    {
      name: 'vrAddToolbarButtonGroup',
      brief: 'Adds a new group for toolbar buttons to be attached to',
    ref: 'group__api__lua.html#1gaf0d14f8c1e50fcdabb8ad3b8754d0c78'
    },
    {
      name: 'vrConstrainNodeToBounds',
      brief: 'Constrains a node with a TransformLimit to a bounding box',
    ref: 'group__api__lua.html#1gaf0e69463f180a8b9a83a37e3094d1a85'
    },
    {
      name: 'vrNodeRoot',
      brief: 'Finds the root tree node',
    ref: 'group__api__lua.html#1gaf0f92f55bfc2d5d05604bc3302fe7d89'
    },
    {
      name: 'vrMat4Ortho',
      brief: 'Return an orthographic projection matrix',
    ref: 'group__api__lua.html#1gaf10906f3a7e8efcb61d89db490291ba6'
    },
    {
      name: 'vrSetToolEnabled',
      brief: 'Sets the Enabled state of a named Tool',
    ref: 'group__api__lua.html#1gaf1f67abd0282ed12c46d70e31121cf44'
    },
    {
      name: 'vrDeveloperSaveTree',
      brief: 'Saves the tree from a specified node down',
    ref: 'group__api__lua.html#1gaf1fc819503b39de0fea2050b9b3611ad'
    },
    {
      name: 'vrNodeSetLocalPositionZ',
      brief: 'Sets the local z position of the node',
    ref: 'group__api__lua.html#1gaf2322c9e308cda3df1aa058db738b337'
    },
    {
      name: 'vrGetRecentFileList',
      brief: 'Returns the list of recent files',
    ref: 'group__api__lua.html#1gaf2cb54aa1aba919abfadac9e8124644f'
    },
    {
      name: 'vrTreeViewSelectionSelectSiblings',
      brief: 'Selects siblings ',
    ref: 'group__api__lua.html#1gaf32271fe8adca705a82f9e817cde2891'
    },
    {
      name: 'vrNodeGetScale',
      brief: 'Gets the world scale of the node',
    ref: 'group__api__lua.html#1gaf40fb6760142ca13bae0869f3d92146b'
    },
    {
      name: 'vrCreateMetaNode',
      brief: 'Creates a new metanode',
    ref: 'group__api__lua.html#1gaf420fa0a83f0faa221e1307ddef8075f'
    },
    {
      name: 'vrQuaternion',
      brief: 'Return an identity quaternion',
    ref: 'group__api__lua.html#1gaf4c798d12a3c03f64ce240e638a96f09'
    },
    {
      name: 'vrSettingCreateArrayDouble',
      brief: 'Creates a new double array user setting',
    ref: 'group__api__lua.html#1gaf57d03717ee80bf8fda3ff51d58b135d'
    },
    {
      name: 'vrNodeGetLocalScaleY',
      brief: 'Gets the local y scale of the node',
    ref: 'group__api__lua.html#1gaf580847f8d6d2643398ac058b5266c50'
    },
    {
      name: 'vrToggleProjection',
      brief: 'Toggles the current viewport between perspective and orthographic views',
    ref: 'group__api__lua.html#1gaf732da8fa80078c8eaf96b735b2b15f6'
    },
    {
      name: 'vrIsEditableScriptNode',
      brief: 'Returns true if the supplied node contains a script property supported by the script editor',
    ref: 'group__api__lua.html#1gaf78d19a9a496a5e5e046f8a8222d7fca'
    },
    {
      name: 'vrNodeSetLocalScaleZ',
      brief: 'Sets the local z scale of the node',
    ref: 'group__api__lua.html#1gaf84422e1f59b085b1e2398d2f8eaa7a9'
    },
    {
      name: 'vrScriptEditorDeleteSelection',
      brief: 'Deletes the selected text from the currently visible script editor tab',
    ref: 'group__api__lua.html#1gaf974d543fb802d9d9d07a6dbb9801037'
    },
    {
      name: 'vrCopyNodeValues',
      brief: 'Copies the property values from one node to another of the same MetaNode type',
    ref: 'group__api__lua.html#1gafa65bef97bfbfd9bb201002d7170d8e0'
    },
    {
      name: 'vrNodeGetName',
      brief: 'Gets the name of a node',
    ref: 'group__api__lua.html#1gafac27f296be03de3ef1793d1250eb885'
    },
    {
      name: 'vrPlaneFromTriangle',
      brief: 'Returns a plane created from a triangle defined by 3 points',
    ref: 'group__api__lua.html#1gafafa1b213f27defc67dc5b7ec2aa73da'
    },
    {
      name: 'vrNodeGetLocalRotation',
      brief: 'Gets the local rotation of the node',
    ref: 'group__api__lua.html#1gafb2182855736ea72c5e487b99ca1e88c'
    },
    {
      name: 'vrGetViewportLayout',
      brief: 'Gets the user\'s current viewport layout',
    ref: 'group__api__lua.html#1gafb56bbfefea11d7eae0a1b463d209dfe'
    },
    {
      name: 'vrSplitVirtalisHubURL',
      brief: 'Identifies a Virtalis Hub URL and splits out the server name, artifact ID and artifact name',
    ref: 'group__api__lua.html#1gafbd9e2325504cd5ab5ad1de097d81f51'
    },
    {
      name: 'vrUsersNode',
      brief: 'Returns the \'Users\' node from the tree',
    ref: 'group__api__lua.html#1gafbfe3e82d9dd9936e0bd86cc05de7374'
    },
    {
      name: 'vrCursorGetTouchedGeoGroup',
      brief: 'Gets the first geogroup currently under the mouse cursor',
    ref: 'group__api__lua.html#1gafc9370a54a793388913c5b308a7ca59a'
    },
    {
      name: 'vrAABoxTransform',
      brief: 'Returns an axis aligned bounding box transformed by a matrix',
    ref: 'group__api__lua.html#1gafc97bc90ca2b478297371550d3c5bafd'
    },
    {
      name: 'vrGroupAddMember',
      brief: 'Adds a node to the specified group',
    ref: 'group__api__lua.html#1gafd94b6837222e54da4ace6f8b060bbae'
    },
    {
      name: 'vrSmoothStep',
      brief: 'Return a smoothly interpolated value between A and B',
    ref: 'group__api__lua.html#1gafe0840a7002eeca8eb0ff9ed5f3ab6af'
    },
    {
      name: 'vrtree_API',
      brief: '',
    ref: 'group__api__metadefs.html#1gaa0def1b4206318fec1f8dc899b8ecfde'
    },
    {
      name: 'VRCloseMetaHandle',
      brief: 'Closes a handle to a metanode',
    ref: 'group__api__metanodes__general.html#1ga0c01f36d004b68c00e2885315fba93e8'
    },
    {
      name: 'VRCopyMetaNode',
      brief: 'Copies a metanode internally in the API ',
    ref: 'group__api__metanodes__general.html#1ga2f400fe4362af5c1d190363f423e6fc1'
    },
    {
      name: 'VRCreateMetaNode',
      brief: 'Creates a metanode ',
    ref: 'group__api__metanodes__general.html#1ga348f0d4dafaad14cbfe8dbfa9a8886b2'
    },
    {
      name: 'VRGetMetaNodeNameLength',
      brief: 'Gets the length of a metanode\'s name, plus 1 for the trailing null terminator',
    ref: 'group__api__metanodes__general.html#1ga376cd669cb63c6ae4534beecc3fa5e9a'
    },
    {
      name: 'VRFinishMetaNode',
      brief: 'Finishes a metanode definition by passing it to VRTree',
    ref: 'group__api__metanodes__general.html#1ga467e35bc2bb00305bde9880ce252eede'
    },
    {
      name: 'VRCreateIntermediateMetaNodes',
      brief: 'Performs migrations of a metanode to create all known versions between start and end',
    ref: 'group__api__metanodes__general.html#1ga85df397990a865d4d13cbe9f93796ac9'
    },
    {
      name: 'VRFinishMetaNodeEx',
      brief: 'Finishes a metanode definition by passing it to VRTree',
    ref: 'group__api__metanodes__general.html#1gaa6edcc2c468ee03d74b69818298250a6'
    },
    {
      name: 'VRCheckMetaHandleValid',
      brief: 'Checks if a metanode handle is valid ',
    ref: 'group__api__metanodes__general.html#1gaa8e7a338f735b6907b20cab46f5e62d4'
    },
    {
      name: 'VRCreateMetaNodeEx',
      brief: 'Creates a metanode ',
    ref: 'group__api__metanodes__general.html#1gab03cf6934b0e391700b593062c189000'
    },
    {
      name: 'VRGetMetaNodeName',
      brief: 'Gets the name of a metanode',
    ref: 'group__api__metanodes__general.html#1gacfe1aa7677302fabefef1692aa7a364c'
    },
    {
      name: 'VRDeleteMetaNode',
      brief: 'Deletes a metanode',
    ref: 'group__api__metanodes__general.html#1gada940532faba265acedc4891688e6de2'
    },
    {
      name: 'VRCurrentMetaNodeVersion',
      brief: 'Gets the name of the current version of the specified metanode',
    ref: 'group__api__metanodes__general.html#1gae303a5247e15b08251a01533564affad'
    },
    {
      name: 'VRAddPropertyVec2w',
      brief: 'Adds a world float vec2 property to a metanode',
    ref: 'group__api__metanodes__properties.html#1ga0296f51004ad2e202fae45abb5135b6e'
    },
    {
      name: 'VRAddPropertyVec2f',
      brief: 'Adds a float vec2 property to a metanode',
    ref: 'group__api__metanodes__properties.html#1ga047a3002458dbb9b560f7b3150458ae6'
    },
    {
      name: 'VRAddPropertyVec2d',
      brief: 'Adds a double vec2 property to a metanode',
    ref: 'group__api__metanodes__properties.html#1ga08996240a82d639ab0af175e76c2c0c0'
    },
    {
      name: 'VRAddPropertyVectorChar',
      brief: 'Adds a character vector property to a metanode ',
    ref: 'group__api__metanodes__properties.html#1ga0a6e9d49568aeb9aa6f7cc2bb3ea1098'
    },
    {
      name: 'VRAddPropertyVec3f',
      brief: 'Adds a float vec3 property to a metanode',
    ref: 'group__api__metanodes__properties.html#1ga0d40600e8af60e62904dfdb53fe88ece'
    },
    {
      name: 'VRAddPropertyCharRange',
      brief: 'Adds a char property to a metanode with min/max range hints',
    ref: 'group__api__metanodes__properties.html#1ga0e5cfc71a166288ad2762eef15e2647e'
    },
    {
      name: 'VRAddPropertyLinkFilter',
      brief: 'Adds a link property to a metanode with a filter on allowed types',
    ref: 'group__api__metanodes__properties.html#1ga0e6ca5a01a35f34563d512c8c587d2db'
    },
    {
      name: 'VRAddPropertyVectorBool',
      brief: 'Adds a boolean vector property to a metanode ',
    ref: 'group__api__metanodes__properties.html#1ga1bc219ce6b74fbb718b543c6afcdaaa4'
    },
    {
      name: 'VRAddPropertyInt',
      brief: 'Adds an integer property to a metanode',
    ref: 'group__api__metanodes__properties.html#1ga1d8de56ed0063710393c484fc0999425'
    },
    {
      name: 'VRAddPropertyArrayDouble',
      brief: 'Adds an arbitrarily sized double array property to a metanode',
    ref: 'group__api__metanodes__properties.html#1ga1df8d077ff1853517f9c91992e00eae7'
    },
    {
      name: 'VRAddPropertyMat3d',
      brief: 'Adds a 3x3 double matrix property to a metanode',
    ref: 'group__api__metanodes__properties.html#1ga1f238d9e466e8e18c724362847e58933'
    },
    {
      name: 'VRAddPropertyVectorWorldFloat',
      brief: 'Adds a world float vector property to a metanode ',
    ref: 'group__api__metanodes__properties.html#1ga20360d583015feb8b35e7b2e34bb5380'
    },
    {
      name: 'VRSetPropertyInternal',
      brief: 'Sets a property as internal ',
    ref: 'group__api__metanodes__properties.html#1ga2863235aee292eb6411fc46e8eeafe8d'
    },
    {
      name: 'VRAddPropertyMat4d',
      brief: 'Adds a 4x4 double matrix property to a metanode',
    ref: 'group__api__metanodes__properties.html#1ga2add1092f1a8492f7ab8d5cb4a9e3253'
    },
    {
      name: 'VRAddPropertyFloat',
      brief: 'Adds a float property to a metanode',
    ref: 'group__api__metanodes__properties.html#1ga3534ee729cfbda476a61971b8f770874'
    },
    {
      name: 'VRAddPropertyStringEx',
      brief: 'Adds a string property to a metanode with a default string value',
    ref: 'group__api__metanodes__properties.html#1ga39651dc0fac6f494d9c64734c2dee006'
    },
    {
      name: 'VRAddPropertyVec3dRange',
      brief: 'Adds a double vec3 property to a metanode with range hints',
    ref: 'group__api__metanodes__properties.html#1ga3f6f3304f913a6b76d8dca4e26de7062'
    },
    {
      name: 'VRAddPropertyDoubleRange',
      brief: 'Adds a double property to a metanode, with min/max range hints',
    ref: 'group__api__metanodes__properties.html#1ga42419eaaec9b2038542280844d923f20'
    },
    {
      name: 'VRAddPropertyMat4w2D',
      brief: 'Adds a 4x4 world float matrix property to a metanode, with a prop semantic specifying that a 2D matrix editing control should be used for it ',
    ref: 'group__api__metanodes__properties.html#1ga48708f9665bb8dacd0833da02192a347'
    },
    {
      name: 'VRAddPropertyVec3d',
      brief: 'Adds a double vec3 property to a metanode',
    ref: 'group__api__metanodes__properties.html#1ga4ecb36673fc7e6c268a68e75e819e709'
    },
    {
      name: 'VRAddPropertyVec2iRange',
      brief: 'Adds an integer vec2 property to a metanode with range hints',
    ref: 'group__api__metanodes__properties.html#1ga535d6fddc7e9143489abbeaef88eb2c3'
    },
    {
      name: 'VRAddPropertyMat4w',
      brief: 'Adds a 4x4 world float matrix property to a metanode',
    ref: 'group__api__metanodes__properties.html#1ga53bc4ec5d60744aeb4d73c4a66f27918'
    },
    {
      name: 'VRAddPropertyArrayChar',
      brief: 'Adds an arbitrarily sized character array property to a metanode',
    ref: 'group__api__metanodes__properties.html#1ga57b6a45ca124331c7b60c94e68b9d6c6'
    },
    {
      name: 'VRAddPropertyVectorString',
      brief: 'Adds a string vector property to a metanode ',
    ref: 'group__api__metanodes__properties.html#1ga590aa458f6bfa8ea8696d3e53773f20a'
    },
    {
      name: 'VRSetPropertyCached',
      brief: 'Sets a property as cached ',
    ref: 'group__api__metanodes__properties.html#1ga5b19ac5fd9c599dfcf4e29086eb7933a'
    },
    {
      name: 'VRAddPropertyVec3fRange',
      brief: 'Adds a float vec3 property to a metanode with range hints',
    ref: 'group__api__metanodes__properties.html#1ga5da2b6aac1923c5ce8e275ee497949cc'
    },
    {
      name: 'VRAddPropertyVec2wRange',
      brief: 'Adds a world float vec2 property to a metanode with range hints',
    ref: 'group__api__metanodes__properties.html#1ga5eb65387670c5929b308ef3c6f8ecac6'
    },
    {
      name: 'VRAddPropertyString',
      brief: 'Adds a string property to a metanode',
    ref: 'group__api__metanodes__properties.html#1ga60dee4d69f877bf8194852fb4e4136dd'
    },
    {
      name: 'VRAddPropertyVec4i',
      brief: 'Adds an integer vec4 property to a metanode',
    ref: 'group__api__metanodes__properties.html#1ga62aeba613ea007060ea35a1d8aa7b18c'
    },
    {
      name: 'VRAddPropertyVectorInt',
      brief: 'Adds an integer vector property to a metanode ',
    ref: 'group__api__metanodes__properties.html#1ga642eed51e8de2b2ae104181d385cbb44'
    },
    {
      name: 'VRAddPropertyIntType',
      brief: 'Adds an integer property to a metanode, with min/max range hints',
    ref: 'group__api__metanodes__properties.html#1ga67cb2e8152c170b96a09b2f88ad628c7'
    },
    {
      name: 'VRAddPropertyVec4fRange',
      brief: 'Adds a float vec4 property to a metanode with range hints',
    ref: 'group__api__metanodes__properties.html#1ga7209d2ca0fa4ad323e84bd3b7c3e6ed3'
    },
    {
      name: 'VRSetPropertyCloned',
      brief: 'Sets a property as cloned ',
    ref: 'group__api__metanodes__properties.html#1ga763b051696890840262c2f3f2939439e'
    },
    {
      name: 'VRAddPropertyMat3w',
      brief: 'Adds a 3x3 world float matrix property to a metanode',
    ref: 'group__api__metanodes__properties.html#1ga76e6c543da8109e09a566082f0e06360'
    },
    {
      name: 'VRAddPropertyDouble',
      brief: 'Adds a double property to a metanode',
    ref: 'group__api__metanodes__properties.html#1ga78dcd16b0b4596435b751a81bf2baa56'
    },
    {
      name: 'VRAddPropertyArrayWorldFloat',
      brief: 'Adds an arbitrarily sized world float array property to a metanode',
    ref: 'group__api__metanodes__properties.html#1ga7ba070ea7463c3c1f8b34eb6855ce905'
    },
    {
      name: 'VRAddPropertyLink',
      brief: 'Adds a link property to a metanode',
    ref: 'group__api__metanodes__properties.html#1ga839d906ad23f8aad848af11dae957928'
    },
    {
      name: 'VRAddPropertyVec2dRange',
      brief: 'Adds a double vec2 property to a metanode with range hints',
    ref: 'group__api__metanodes__properties.html#1ga96912b894edc25eebb07c979536fc570'
    },
    {
      name: 'VRAddPropertyStringType',
      brief: 'Adds a string property to a metanode with a default string value',
    ref: 'group__api__metanodes__properties.html#1ga99c66a09d7bbc808319a2668f24d255e'
    },
    {
      name: 'VRAddPropertyVec3iRange',
      brief: 'Adds an integer vec3 property to a metanode with range hints',
    ref: 'group__api__metanodes__properties.html#1ga9c7ce6793e6be0017a119882bf217d0b'
    },
    {
      name: 'VRAddPropertyVectorFloat',
      brief: 'Adds a float vector property to a metanode ',
    ref: 'group__api__metanodes__properties.html#1ga9f010ff8b745bf03a97632000e971b02'
    },
    {
      name: 'VRAddPropertyVec4f',
      brief: 'Adds a float vec4 property to a metanode',
    ref: 'group__api__metanodes__properties.html#1gaa3228e1b099b1a3e221da462ba93f347'
    },
    {
      name: 'VRAddPropertyVec4w',
      brief: 'Adds a world float vec4 property to a metanode',
    ref: 'group__api__metanodes__properties.html#1gaa5f234473f4abca67566db7c5ad7d45d'
    },
    {
      name: 'VRSetPropertyReadOnly',
      brief: 'Sets a property as read-only ',
    ref: 'group__api__metanodes__properties.html#1gaaa7b5ace54fe721a6192b5cac2ad8a4a'
    },
    {
      name: 'VRAddPropertyVec3wRange',
      brief: 'Adds a world float vec3 property to a metanode with range hints Defaults and range are specified as double and truncated to float if the world float type is single precision',
    ref: 'group__api__metanodes__properties.html#1gaab6372e81e61963208f04db20fc35792'
    },
    {
      name: 'VRAddPropertyWorldFloat',
      brief: 'Adds a world float property to a metanode',
    ref: 'group__api__metanodes__properties.html#1gaaba7669f101ba05d780d7449117aff64'
    },
    {
      name: 'VRAddPropertyRGB',
      brief: 'Adds an RGB colour property to a metanode',
    ref: 'group__api__metanodes__properties.html#1gaacf04e6f3d55775115cb96e4a961f281'
    },
    {
      name: 'VRAddPropertyStream',
      brief: 'Adds a stream property to a metanode with a file filter of allowed types',
    ref: 'group__api__metanodes__properties.html#1gab0426ccfedb81f792ca99918ac5d9081'
    },
    {
      name: 'VRAddPropertyVec2fRange',
      brief: 'Adds a float vec2 property to a metanode with range hints',
    ref: 'group__api__metanodes__properties.html#1gab0d83febcbb74f705f3bf1e6479411be'
    },
    {
      name: 'VRAddPropertyFloatRange',
      brief: 'Adds a float property to a metanode, with min/max range hints',
    ref: 'group__api__metanodes__properties.html#1gab21e3b201eaa345c15594127c9dd9fe1'
    },
    {
      name: 'VRAddPropertyArrayInt',
      brief: 'Adds an arbitrarily sized integer array property to a metanode',
    ref: 'group__api__metanodes__properties.html#1gab41bf2b72ef139587d55a3bf519529d8'
    },
    {
      name: 'VRAddPropertyArrayFloat',
      brief: 'Adds an arbitrarily sized float array property to a metanode',
    ref: 'group__api__metanodes__properties.html#1gab6729fd2aec4af769f5da1b9b56de922'
    },
    {
      name: 'VRAddPropertyBool',
      brief: 'Adds a boolean property to a metanode',
    ref: 'group__api__metanodes__properties.html#1gabc80c04b684cad74d85197eb064dc8d6'
    },
    {
      name: 'VRAddPropertyChar',
      brief: 'Adds a char property to a metanode',
    ref: 'group__api__metanodes__properties.html#1gabf81c501993d41be4c1dffe81caa675e'
    },
    {
      name: 'VRSetPropertySaved',
      brief: 'Sets a property as saved ',
    ref: 'group__api__metanodes__properties.html#1gac0a666bfc26bcd920e1d290feb5c6f3d'
    },
    {
      name: 'VRAddPropertyWorldFloatRange',
      brief: 'Adds a world float property to a metanode, with min/max range hints',
    ref: 'group__api__metanodes__properties.html#1gac0d43ada0969d0ded064c9fec97d35ca'
    },
    {
      name: 'VRAddPropertyRGBA',
      brief: 'Adds an RGBA colour property to a metanode',
    ref: 'group__api__metanodes__properties.html#1gac391fc751421175143c46cfc4afbc61c'
    },
    {
      name: 'VRAddPropertyVec3i',
      brief: 'Adds an integer vec3 property to a metanode',
    ref: 'group__api__metanodes__properties.html#1gac4635803fc2f2ec79ef18c258e1e1ad8'
    },
    {
      name: 'VRGetPropertiesCount',
      brief: 'Gets the number of properties on a metanode',
    ref: 'group__api__metanodes__properties.html#1gac5a014bcf5a52983b9da0278eb22f659'
    },
    {
      name: 'VRAddPropertyMat4f',
      brief: 'Adds a 4x4 float matrix property to a metanode',
    ref: 'group__api__metanodes__properties.html#1gac641913d9de36608b211d6fedb7b9ca5'
    },
    {
      name: 'VRAddPropertyVec4wRange',
      brief: 'Adds a world float vec4 property to a metanode with range hints',
    ref: 'group__api__metanodes__properties.html#1gad594d2a252d644eba905ed4b75b1d871'
    },
    {
      name: 'VRAddPropertyMat3f',
      brief: 'Adds a 3x3 float matrix property to a metanode',
    ref: 'group__api__metanodes__properties.html#1gad78a11c765eefa0f7a3cdbad8a390227'
    },
    {
      name: 'VRAddPropertyVec4iRange',
      brief: 'Adds an integer vec4 property to a metanode with range hints',
    ref: 'group__api__metanodes__properties.html#1gadc27296afe8a7c849bc149e2cd8ed216'
    },
    {
      name: 'VRAddPropertyFile',
      brief: 'Adds a file property to a metanode with a file filter of allowed types',
    ref: 'group__api__metanodes__properties.html#1gade70f80395fa5f017a04e44bb522ae43'
    },
    {
      name: 'VRAddPropertySphere',
      brief: 'Adds a sphere property to a metanode',
    ref: 'group__api__metanodes__properties.html#1gae2fe4118dade732edfc6dad1e4d835e3'
    },
    {
      name: 'VRAddPropertyArrayBool',
      brief: 'Adds an arbitrarily sized boolean array property to a metanode',
    ref: 'group__api__metanodes__properties.html#1gae2ff56d5a95ba64e3f54e569fb78e86b'
    },
    {
      name: 'VRSetPropertyPurged',
      brief: 'Sets a property as purged ',
    ref: 'group__api__metanodes__properties.html#1gae4ae7b109a3cc0948dec8dd8883f7d69'
    },
    {
      name: 'VRAddPropertyVec3w',
      brief: 'Adds a world float vec3 property to a metanode',
    ref: 'group__api__metanodes__properties.html#1gae66833b91ca432331a9ef81153ee9c66'
    },
    {
      name: 'VRAddPropertyVec4dRange',
      brief: 'Adds a double vec4 property to a metanode with range hints',
    ref: 'group__api__metanodes__properties.html#1gaed523148fd079a6112701379049897be'
    },
    {
      name: 'VRAddPropertyVec4d',
      brief: 'Adds a double vec4 property to a metanode',
    ref: 'group__api__metanodes__properties.html#1gaef79abb65e251d009c8398aa9e290586'
    },
    {
      name: 'VRAddPropertyIntRange',
      brief: 'Adds an integer property to a metanode, with min/max range hints',
    ref: 'group__api__metanodes__properties.html#1gaf773146fa6af594c5487bced1a10a185'
    },
    {
      name: 'VRAddPropertyVectorDouble',
      brief: 'Adds a double vector property to a metanode ',
    ref: 'group__api__metanodes__properties.html#1gaf8d648ae1621d4fd3b93c3142de2edcd'
    },
    {
      name: 'VRAddPropertyVec2i',
      brief: 'Adds an integer vec2 property to a metanode',
    ref: 'group__api__metanodes__properties.html#1gafd0028cbfa45611b56c019ebc682cafd'
    },
    {
      name: 'VRAddTrait',
      brief: 'Adds a trait to a metanode ',
    ref: 'group__api__metanodes__semantics.html#1ga23be4542b71576a96591e8af4a95614c'
    },
    {
      name: 'VRAddSymbol',
      brief: 'Adds a symbol to the metanode',
    ref: 'group__api__metanodes__semantics.html#1ga2dc06b2a8b6dda5042a679e63b4c796c'
    },
    {
      name: 'VRAddGuiHintDouble',
      brief: 'Adds a double gui hint to the metanode',
    ref: 'group__api__metanodes__semantics.html#1ga87937ec0c3588dacb58d760e20c17d59'
    },
    {
      name: 'VRAddGuiHintInt',
      brief: 'Adds an int gui hint to the metanode',
    ref: 'group__api__metanodes__semantics.html#1ga879cecaccc50733256db42cc75b8b0cc'
    },
    {
      name: 'VRAddTraitEx',
      brief: 'Adds a trait to a metanode ',
    ref: 'group__api__metanodes__semantics.html#1ga88874d26ae97ad659c36a03138538ee1'
    },
    {
      name: 'VRAddGuiHintString',
      brief: 'Adds a string gui hint to the metanode',
    ref: 'group__api__metanodes__semantics.html#1ga928d9f1dbba92b9f354821c05802c0ed'
    },
    {
      name: 'VRAddGuiHintBool',
      brief: 'Adds a bool gui hint to the metanode',
    ref: 'group__api__metanodes__semantics.html#1gaf7c500f70cd6ebd4447521b8b54983e9'
    },
    {
      name: 'VRSetMigrationUp',
      brief: 'Adds an upgrade function to a migration',
    ref: 'group__api__migrations.html#1ga0796edcf34207693bb0b54a986a7d956'
    },
    {
      name: 'VRMigrationPrepareNode',
      brief: 'Calls the registered upgrade node function of the migration previous or next to this one ',
    ref: 'group__api__migrations.html#1ga079ba4c4e5c03c9b939b3d449c0a5d85'
    },
    {
      name: 'VRRemoveProperty',
      brief: 'Removes a property from a metanode',
    ref: 'group__api__migrations.html#1ga1287ce3b93b78671ab6ecb1b4c2de1b2'
    },
    {
      name: 'VRChangePropertyName',
      brief: 'Renames a property',
    ref: 'group__api__migrations.html#1ga2cf906c9252a3706e6c5b396e4fbe461'
    },
    {
      name: 'VRChangePropertyBool',
      brief: 'Changes the specified property to single element VR_BOOL type',
    ref: 'group__api__migrations.html#1ga3e1b0312da00bb6c4a6d0a91211770ce'
    },
    {
      name: 'VRChangePropertyDouble',
      brief: 'Changes the specified property to single element VR_DOUBLE type',
    ref: 'group__api__migrations.html#1ga48f08a5ad4945d22011af1ec503848a9'
    },
    {
      name: 'VRMigrationCreateCurrentNode',
      brief: 'Creates an instance of a node using the metanode version defined by this migration',
    ref: 'group__api__migrations.html#1ga50425faa0cd8fb85f4caf2925a8f8add'
    },
    {
      name: 'VRMigrationPrev',
      brief: 'Gets the previous migration in the chain ',
    ref: 'group__api__migrations.html#1ga51d97f28efea06a3fac51e83aefe5606'
    },
    {
      name: 'VRMigrationFinish',
      brief: 'Helper function for completing a migration step',
    ref: 'group__api__migrations.html#1ga5722862899696bcd17ee0e6a71fe5ed0'
    },
    {
      name: 'VRSetMigrationDown',
      brief: 'Adds a downgrade function to a migration',
    ref: 'group__api__migrations.html#1ga6b5e4ba41cdb2c506d18f1709e90db60'
    },
    {
      name: 'VRChangePropertyArrayInt',
      brief: 'Changes the specified property to a VR_INT array type',
    ref: 'group__api__migrations.html#1ga71c6bc090e555174b0c8cdd645540d16'
    },
    {
      name: 'VRChangePropertyChar',
      brief: 'Changes the specified property to single element VR_CHAR type',
    ref: 'group__api__migrations.html#1ga768e25fb2905f15a3b4330e5c3771c71'
    },
    {
      name: 'VRChangePropertyInt',
      brief: 'Changes the specified property to single element VR_INT type',
    ref: 'group__api__migrations.html#1ga7f3663053510c25c4c1a137a610f4fbf'
    },
    {
      name: 'VRMigrationNext',
      brief: 'Gets the next migration in the chain ',
    ref: 'group__api__migrations.html#1ga81c7cef650aaad91edc178019aa27d3a'
    },
    {
      name: 'VRChangePropertyString',
      brief: 'Changes the specified property to single element VR_STRING type',
    ref: 'group__api__migrations.html#1ga8d756c4edaba2235fb503b923673013e'
    },
    {
      name: 'VRChangePropertyVectorChar',
      brief: 'Changes the specified property to a VR_VEC_CHAR type',
    ref: 'group__api__migrations.html#1ga960a18d33ff65e8021b262fc8424a087'
    },
    {
      name: 'VRMigrationCopyKnownProperties',
      brief: 'Copies values of all properties that exist on both new and old node versions of the nodes',
    ref: 'group__api__migrations.html#1ga9a297a130ae10f9c35c4b43af885d273'
    },
    {
      name: 'VRChangePropertyVectorString',
      brief: 'Changes the specified property to a VR_VEC_STRING type',
    ref: 'group__api__migrations.html#1ga9d5e5c6cc53324d8e76ee24314e6451c'
    },
    {
      name: 'VRAddMigration',
      brief: 'Adds a migration to the ordered list of migrations applied to the metanode',
    ref: 'group__api__migrations.html#1ga9ff36fb97d9c9c6b4a22a755decb0141'
    },
    {
      name: 'VRChangePropertyVectorFloat',
      brief: 'Changes the specified property to a VR_VEC_FLOAT type',
    ref: 'group__api__migrations.html#1gaa0b4eb8bfef97561a8e8488c1a6e1f9e'
    },
    {
      name: 'VRChangePropertyVectorInt',
      brief: 'Changes the specified property to a VR_VEC_INT type',
    ref: 'group__api__migrations.html#1gaa7808eba2f007ffef55dd03a40b45449'
    },
    {
      name: 'VRChangePropertyArrayChar',
      brief: 'Changes the specified property to a VR_CHAR array type',
    ref: 'group__api__migrations.html#1gaa917676207eeeb16173e4b0dbb62ae55'
    },
    {
      name: 'VRSetMigrationDowngradeNode',
      brief: 'Adds a node downgrade function to a migration',
    ref: 'group__api__migrations.html#1gaad8d436e2a9b7a9e0aae9a059d1ee82b'
    },
    {
      name: 'VRChangePropertyWorldFloat',
      brief: 'Changes the specified property to single element VR_WORLD_FLOAT type',
    ref: 'group__api__migrations.html#1gab109b04277dd733da65de0236502053b'
    },
    {
      name: 'VRChangePropertyFloat',
      brief: 'Changes the specified property to single element VR_FLOAT type',
    ref: 'group__api__migrations.html#1gac0095a0cbc09da4347e22f5018c6ea77'
    },
    {
      name: 'VRChangePropertyArrayDouble',
      brief: 'Changes the specified property to a VR_DOUBLE array type',
    ref: 'group__api__migrations.html#1gac4d14cab7bed371fdb9265151a36aa7b'
    },
    {
      name: 'VRChangePropertyArrayFloat',
      brief: 'Changes the specified property to a VR_FLOAT array type',
    ref: 'group__api__migrations.html#1gaca608c476c98b2ef8abfb6ea219582cb'
    },
    {
      name: 'VRChangePropertyArrayWorldFloat',
      brief: 'Changes the specified property to a VR_WORLD_FLOAT array type',
    ref: 'group__api__migrations.html#1gacf480af91cc22bfac885a46646b77286'
    },
    {
      name: 'VRChangePropertyLink',
      brief: 'Changes the specified property to single element VR_LINK type',
    ref: 'group__api__migrations.html#1gad849b1ac7ca590d6583e5c76db2b0e32'
    },
    {
      name: 'VRChangePropertyArrayBool',
      brief: 'Changes the specified property to a VR_BOOL array type',
    ref: 'group__api__migrations.html#1gad8edb50537225d09a43cb78944879aca'
    },
    {
      name: 'VRAddInstanceMigration',
      brief: '',
    ref: 'group__api__migrations.html#1gadabac3d2da9e7b6d6988acef3537ee64'
    },
    {
      name: 'VRChangePropertyVectorWorldFloat',
      brief: 'Changes the specified property to a VR_VEC_WORLD_FLOAT type',
    ref: 'group__api__migrations.html#1gadef374bd52ab3730d11d5618fd13b1c2'
    },
    {
      name: 'VRSetMigrationUpgradeNode',
      brief: 'Adds a node upgrade function to a migration',
    ref: 'group__api__migrations.html#1gae09a29470a004dcb1f8331b0043c82ec'
    },
    {
      name: 'VRCloseMigrationHandle',
      brief: 'Closes a migration handle',
    ref: 'group__api__migrations.html#1gae7c547dbffb1f67d47c1afdccf4cd388'
    },
    {
      name: 'VRRemoveCallbackRelease',
      brief: 'Remove Release callback ',
    ref: 'group__api__observer.html#1ga0babaed11d39f0042ec82de312bcaa8b'
    },
    {
      name: 'VRAddCallbackTouch',
      brief: 'Add Touch callback ',
    ref: 'group__api__observer.html#1ga158fb3b63207d5c00021238072b7d92f'
    },
    {
      name: 'VRRemoveCallbackNodeChildRemovedEx',
      brief: 'Unregisters a function called whenever a node has children removed from it',
    ref: 'group__api__observer.html#1ga17da83d8fe38fa5c198c7e84311fb44c'
    },
    {
      name: 'VRRemoveCallbackDoubleClick',
      brief: 'Remove Double click callback ',
    ref: 'group__api__observer.html#1ga17f231c7ba9a4eb4a2b38fbb1aa45ee5'
    },
    {
      name: 'VRRemoveCallbackToggle',
      brief: 'Remove Toggle callback ',
    ref: 'group__api__observer.html#1ga1d1e4e56031283105eb47f7f90e2511a'
    },
    {
      name: 'VRAddCallbackNodeRenamed',
      brief: 'Registers a function to be called whenever a node is renamed',
    ref: 'group__api__observer.html#1ga22739d00b829a37d92f71e05aad8cd70'
    },
    {
      name: 'VRRemoveCallbackEnter',
      brief: 'Remove Enter callback ',
    ref: 'group__api__observer.html#1ga2c4083f4ab0412d8f5b660d55a98e817'
    },
    {
      name: 'VRRemoveCallbackNodeCreation',
      brief: 'Unregisters a function called whenever a node is created',
    ref: 'group__api__observer.html#1ga2d14b1d12ae6e1781026dfddd6519a4f'
    },
    {
      name: 'VRAddCallbackPoseLeft',
      brief: 'Add Pose left callback ',
    ref: 'group__api__observer.html#1ga2dfef143350e170cf27331edf9020171'
    },
    {
      name: 'VRAddCallbackNodeParentChanged',
      brief: 'Registers a function to be called whenever a node is moved to a new parent',
    ref: 'group__api__observer.html#1ga2ea899621ad0bd821c07afd9353db9e7'
    },
    {
      name: 'VRAddCallbackDoubleClick',
      brief: 'Add Double click callback ',
    ref: 'group__api__observer.html#1ga31f4d9fc3fdae221c79aa2a500b74ef2'
    },
    {
      name: 'VRAddCallbackGesture',
      brief: 'Add Gesture callback ',
    ref: 'group__api__observer.html#1ga32d47d1c5f366941fee64d150e1e6974'
    },
    {
      name: 'VRAddCallbackRelease',
      brief: 'Add Release callback ',
    ref: 'group__api__observer.html#1ga3a87ca8065567041796f551110e9190f'
    },
    {
      name: 'VRAddCallbackKeyPress',
      brief: 'Add Key press callback ',
    ref: 'group__api__observer.html#1ga428154f0e26e85d425c4f1a2d90a8d33'
    },
    {
      name: 'VRAddCallbackNodeChildRemoved',
      brief: 'Registers a function to be called whenever a node has a child removed from it',
    ref: 'group__api__observer.html#1ga44008364799384625c68f8bf3153e8b8'
    },
    {
      name: 'VRRemoveCallbackNodeValuesChangedEx',
      brief: 'Unregisters a function called whenever a node is modified',
    ref: 'group__api__observer.html#1ga49ae1e8e649a6d377a967d21988f19a5'
    },
    {
      name: 'VRRemoveCallbackUpdateEx',
      brief: 'Unregisters an update function',
    ref: 'group__api__observer.html#1ga53056b51857ca9d2e0ec52ea74404da1'
    },
    {
      name: 'VRRemoveCallbackKeyPress',
      brief: 'Remove Key press callback ',
    ref: 'group__api__observer.html#1ga5b55b5196ca4e634347e986341f2f11c'
    },
    {
      name: 'VRAddCallbackLeave',
      brief: 'Add Leave callback ',
    ref: 'group__api__observer.html#1ga5c488951da8386a7168556b589e3bdec'
    },
    {
      name: 'VRRemoveCallbackMove',
      brief: 'Remove Move callback ',
    ref: 'group__api__observer.html#1ga5fdd801bc850d1326dda6e49e66623d6'
    },
    {
      name: 'VRRemoveCallbackNodeRenamed',
      brief: 'Unregisters a function called whenever a node is renamed',
    ref: 'group__api__observer.html#1ga6ca097075503cc31502209a903d30b12'
    },
    {
      name: 'VRRemoveCallbackNodeValuesChanged',
      brief: 'Unregisters a function called whenever a node is modified',
    ref: 'group__api__observer.html#1ga6e2955e1c6e699dff97a316cf0f03086'
    },
    {
      name: 'VRRemoveCallbackClick',
      brief: 'Remove Click callback ',
    ref: 'group__api__observer.html#1ga72928e19047edf604247005fce5a36cc'
    },
    {
      name: 'VRRemoveCallbackNodeRenamedEx',
      brief: 'Unregisters a function called whenever a node is renamed',
    ref: 'group__api__observer.html#1ga8269e47a09eda4c7db2068b68fd8ed3c'
    },
    {
      name: 'VRAddCallbackNodeDestruction',
      brief: 'Registers a function to be called whenever a node is deleted',
    ref: 'group__api__observer.html#1ga8767889d4bc0aa9b5f7f43a5392eaa0f'
    },
    {
      name: 'VRRemoveCallbackNodeParentChanged',
      brief: 'Unregisters a function called whenever a node is moved somewhere else in the tree',
    ref: 'group__api__observer.html#1ga8b81ec43948de283257aaf4370768cc0'
    },
    {
      name: 'VRRemoveCallbackPoseLeft',
      brief: 'Remove Pose left callback ',
    ref: 'group__api__observer.html#1ga8d24dddef8fead4c51235c4357b9d52c'
    },
    {
      name: 'VRRemoveCallbackNodeCreationEx',
      brief: 'Unregisters a function called whenever a node is created',
    ref: 'group__api__observer.html#1ga8dbbafd94570881661ef8912a1b7a46e'
    },
    {
      name: 'VRRemoveCallbackPress',
      brief: 'Remove Press callback ',
    ref: 'group__api__observer.html#1ga965641140d215ee3f313a57eb7747a6a'
    },
    {
      name: 'VRAddCallbackPress',
      brief: 'Add Press callback ',
    ref: 'group__api__observer.html#1ga96728a3ad6f96006149e92b625c00b7e'
    },
    {
      name: 'VRRemoveCallbackTouch',
      brief: 'Remove Touch callback ',
    ref: 'group__api__observer.html#1ga988eb6ddaa62663fce9a1181105c3b8c'
    },
    {
      name: 'VRRemoveCallbackKeyRelease',
      brief: 'Remove Key release callback ',
    ref: 'group__api__observer.html#1gaa138c2d56be4372b6abf01c576a4a3b1'
    },
    {
      name: 'VRAddCallbackPoseEntered',
      brief: 'Add Pose entered callback ',
    ref: 'group__api__observer.html#1gaa317f7d918a5c7f5bf164078f93948d0'
    },
    {
      name: 'VRAddCallbackEnter',
      brief: 'Add Enter callback ',
    ref: 'group__api__observer.html#1gaa3c83577827b7e1db6ffec9f7084c9bb'
    },
    {
      name: 'VRRemoveCallbackNodeParentChangedEx',
      brief: 'Unregisters a function called whenever a node is moved somewhere else in the tree',
    ref: 'group__api__observer.html#1gaaca4ee804b52de326f010f99fa4817ef'
    },
    {
      name: 'VRRemoveCallbackLeave',
      brief: 'Remove Leave callback ',
    ref: 'group__api__observer.html#1gab5b698580a5e574cf3576f96e62e55b6'
    },
    {
      name: 'VRAddCallbackKeyRelease',
      brief: 'Add Key release callback ',
    ref: 'group__api__observer.html#1gab9148c8e5fe003f8430a76ed4eb9910a'
    },
    {
      name: 'VRRemoveCallbackNodeChildAdded',
      brief: 'Unregisters a function called whenever a node has children added to it',
    ref: 'group__api__observer.html#1gabac31a828f3c3ccb2e09e07848e30569'
    },
    {
      name: 'VRRemoveCallbackGesture',
      brief: 'Remove Gesture callback ',
    ref: 'group__api__observer.html#1gabbe28d8e9a559e7e891b6bfc8dad36eb'
    },
    {
      name: 'VRAddCallbackMove',
      brief: 'Add Move callback',
    ref: 'group__api__observer.html#1gabf0c17d59bd987104007854d6b693928'
    },
    {
      name: 'VRAddCallbackClick',
      brief: 'Add Click callback ',
    ref: 'group__api__observer.html#1gac2f0a11cc05488066c79ac98c482dcd2'
    },
    {
      name: 'VRRemoveCallbackNodeChildRemoved',
      brief: 'Unregisters a function called whenever a node has children removed from it',
    ref: 'group__api__observer.html#1gac35faad6ef5e7554ba2638cdf0830f22'
    },
    {
      name: 'VRAddCallbackNodeChildAdded',
      brief: 'Registers a function to be called whenever a node has a child added to it',
    ref: 'group__api__observer.html#1gac3f4a186d1157387d8df26fa0b31ed5f'
    },
    {
      name: 'VRRemoveCallbackBreak',
      brief: 'Remove Break callback ',
    ref: 'group__api__observer.html#1gac4ae1627dbb6c0a9ba71ce8693bf87d4'
    },
    {
      name: 'VRAddCallbackNodeValuesChanged',
      brief: 'Registers a function to be called whenever a node is modified',
    ref: 'group__api__observer.html#1gac9462e4b0bafe412eb98fcff55075076'
    },
    {
      name: 'VRRemoveCallbackNodeDestruction',
      brief: 'Unregisters a function called whenever a node is destroyed',
    ref: 'group__api__observer.html#1gaca16f17e9e9044d7076ea61ef3488e76'
    },
    {
      name: 'VRRemoveCallbackPoseEntered',
      brief: 'Remove Pose entered callback ',
    ref: 'group__api__observer.html#1gacedaa789935da3dcb33e40bdceec8f7d'
    },
    {
      name: 'VRAddCallbackNodeCreation',
      brief: 'Registers a function to be called whenever a node is created',
    ref: 'group__api__observer.html#1gad353c36919303e70556737141945a665'
    },
    {
      name: 'VRAddCallbackActivate',
      brief: 'Event callbacks',
    ref: 'group__api__observer.html#1gad6d50e76d7a57ba11b6267602f18d9f4'
    },
    {
      name: 'VRRemoveCallbackActivate',
      brief: 'Remove callback for Activate event of a node and the other node deactivated',
    ref: 'group__api__observer.html#1gad94b66f02df7e0aedfbdba0068b3534e'
    },
    {
      name: 'VRAddCallbackBreak',
      brief: 'Add Break callback ',
    ref: 'group__api__observer.html#1gada1cb9238dbc01ca18ead090e1fe277b'
    },
    {
      name: 'VRAddCallbackToggle',
      brief: 'Add Toggle callback ',
    ref: 'group__api__observer.html#1gae04e74bcc526ab4afadd6fe13c5ac621'
    },
    {
      name: 'VRRemoveCallbackUpdate',
      brief: 'Unregisters an update function',
    ref: 'group__api__observer.html#1gae3cca6926721ef1539af64c15288765b'
    },
    {
      name: 'VRRemoveCallbackNodeChildAddedEx',
      brief: 'Unregisters a function called whenever a node has children added to it',
    ref: 'group__api__observer.html#1gae984655d8bc9efee35d807f1c92b2a98'
    },
    {
      name: 'VRRemoveCallbackNodeDestructionEx',
      brief: 'Unregisters a function called whenever a node is destroyed',
    ref: 'group__api__observer.html#1gaed516c469ac8894d3eecdcfca2ca7d53'
    },
    {
      name: 'VRAddCallbackUpdate',
      brief: 'Registers a function to be called whenever VRTree updates VRUpdate) ',
    ref: 'group__api__observer.html#1gafbba66995a95226599f720434b3fcca7'
    },
    {
      name: 'VRPRegisterUserQuestionCallbackProc',
      brief: 'Function prototype for registering a question callback function',
    ref: 'group__api__plugin__interface.html#1ga01d90b05a99e133891a227eebf00f950'
    },
    {
      name: 'VRPUserMessageProc',
      brief: 'Function prototype for triggering an application dialog containing a message to present directly to the user',
    ref: 'group__api__plugin__interface.html#1ga03f089289831aa2665fbbf23401d4c48'
    },
    {
      name: 'VRPImportProc',
      brief: 'Function prototype for an import function',
    ref: 'group__api__plugin__interface.html#1ga0633697120c8b253884273b95692416d'
    },
    {
      name: 'VRPRegisterUserQuestionProc',
      brief: 'Function prototype for registering a question function',
    ref: 'group__api__plugin__interface.html#1ga16e247630893e4d7417386fdf70fef3f'
    },
    {
      name: 'VRPRequestPermissionProc',
      brief: 'Function prototype for requesting permission to do something',
    ref: 'group__api__plugin__interface.html#1ga18d5cbd48e313c1e628613404677daf2'
    },
    {
      name: 'VRPRegisterUserMessageProc',
      brief: 'Function prototype for registering a message function',
    ref: 'group__api__plugin__interface.html#1ga2778a31af7f6faa6ca5ac411726549e4'
    },
    {
      name: 'VRPUserQuestionProc',
      brief: 'Function prototype for triggering an application dialog containing a question to ask to the userVRPUserQuestionCallbackProc',
    ref: 'group__api__plugin__interface.html#1ga2bee393f89509b822d968a9ea8165447'
    },
    {
      name: 'VRPDefaultRecipeProc',
      brief: 'Function prototype for getting the name of the default recipe file used by the importer',
    ref: 'group__api__plugin__interface.html#1ga3f7e4a1c107f23186e0c84d75c4105c6'
    },
    {
      name: 'VRPNameProc',
      brief: 'Function prototype for getting the plugin full name',
    ref: 'group__api__plugin__interface.html#1ga637d2733eb3fcaa29e17a593e25bc557'
    },
    {
      name: 'VRPGetAPIVersionProc',
      brief: 'Function prototype for the API version functions',
    ref: 'group__api__plugin__interface.html#1ga66ca5b4817847629baa06784cf903270'
    },
    {
      name: 'VRPSettingsInterfaceProc',
      brief: 'Function prototype for getting the XML description of the settings that should be presented in a user interface',
    ref: 'group__api__plugin__interface.html#1ga772621984246c3212d47df42a4879969'
    },
    {
      name: 'VRPProgressYieldProc',
      brief: 'Function prototypes for a progress yield function',
    ref: 'group__api__plugin__interface.html#1ga7d00de087c4fd4f9afa62cad18d48ab6'
    },
    {
      name: 'VRPLockedProc',
      brief: 'Function prototype for getting the plugin lock condition',
    ref: 'group__api__plugin__interface.html#1ga7d295403c3e665c1ceb289dc70e4b9a8'
    },
    {
      name: 'VRPRegisterProgressYieldProc',
      brief: 'Function prototype for registering a progress yield function',
    ref: 'group__api__plugin__interface.html#1ga81c34b145cfabaca61a28a377b659f37'
    },
    {
      name: 'VRPFormatsProc',
      brief: 'Function prototype for getting the XML description of formats accepted by VRPImportProc',
    ref: 'group__api__plugin__interface.html#1ga8712fbfd7df5313ab5161528aff99745'
    },
    {
      name: 'VRPHasPermissionProc',
      brief: 'Function prototype for checking permission to do somethingVRPRegisterHasPermissionProc',
    ref: 'group__api__plugin__interface.html#1ga8ee2dee5576889ed5c9353182742d9bc'
    },
    {
      name: 'VRPDependsProc',
      brief: 'Function prototype for getting the plugin dependencies',
    ref: 'group__api__plugin__interface.html#1ga917d56672c8cd6a94d25b8491ddac0dd'
    },
    {
      name: 'VRPRegisterLogIndentProc',
      brief: 'Function prototype for being given a log indent function',
    ref: 'group__api__plugin__interface.html#1ga920e99885cfae7a89872882dcf578e9c'
    },
    {
      name: 'PLUGIN_API_VERSION_MINOR',
      brief: 'incremented if new exports are added ',
    ref: 'group__api__plugin__interface.html#1gaa28b16b3503c3c381d68ea6025c74894'
    },
    {
      name: 'VRPRegisterLogProc',
      brief: 'Function prototype for being given a log function',
    ref: 'group__api__plugin__interface.html#1gaa9937631c0a07704224d68a4a8c849ba'
    },
    {
      name: 'VRPSignatureProc',
      brief: 'Function prototype for getting the plugin signature ',
    ref: 'group__api__plugin__interface.html#1gab78dd288a0570443ec663a1bdd5e480c'
    },
    {
      name: 'VRPLogIndentProc',
      brief: 'Function prototype for the log indent function',
    ref: 'group__api__plugin__interface.html#1gacb87d6e24bfbfb81851227de0cc3b873'
    },
    {
      name: 'VRPLogProc',
      brief: 'Function prototype for the log function',
    ref: 'group__api__plugin__interface.html#1gacba7c4a5cd64391237bbc5ca5f2246e9'
    },
    {
      name: 'VRPVersionProc',
      brief: 'Function prototype for getting the plugin version ',
    ref: 'group__api__plugin__interface.html#1gad03b4a20a3896537e9ecf61634913c57'
    },
    {
      name: 'VRPRegisterRequestPermissionProc',
      brief: 'Function prototype for registering a permission request function',
    ref: 'group__api__plugin__interface.html#1gad07a217d26587459283de45565ade4a4'
    },
    {
      name: 'VRPInitProc',
      brief: 'Function prototype for the plugin init function',
    ref: 'group__api__plugin__interface.html#1gad3f1d9dd41266bbea5148a6c08544ba5'
    },
    {
      name: 'VRPShortNameProc',
      brief: 'Function prototype for getting the plugin short name ',
    ref: 'group__api__plugin__interface.html#1gad6eec3dbb3eb83f8caffbe8fd53c076b'
    },
    {
      name: 'VRPRegisterHasPermissionProc',
      brief: 'Function prototype for registering a permission check function',
    ref: 'group__api__plugin__interface.html#1gad85c70c03e124e36c0192dc3642be570'
    },
    {
      name: 'VRPUserQuestionCallbackRegisterProc',
      brief: 'Function prototype for registering a VRPUserQuestionCallbackProc as the callback for UserQuestion dialogs',
    ref: 'group__api__plugin__interface.html#1gad9d7bb363608f66d0ed9d12224985e91'
    },
    {
      name: 'VRPExportProc',
      brief: 'Function prototype for an export function',
    ref: 'group__api__plugin__interface.html#1gae16512f0c6d7415ced4b2331cf30cd22'
    },
    {
      name: 'PLUGIN_API_VERSION_MAJOR',
      brief: 'incremented if backward compatibility is broken ',
    ref: 'group__api__plugin__interface.html#1gae557bf6eeda89ccf2c3cea5d21a7741f'
    },
    {
      name: 'VRPCleanupProc',
      brief: 'Function prototype for the plugin cleanup function',
    ref: 'group__api__plugin__interface.html#1gaee8c95007af0a77fd072f625622c3e1e'
    },
    {
      name: 'VRPUserQuestionCallbackProc',
      brief: 'Function prototype for a callback to call when a user chooses an option presented by a UserQuestion',
    ref: 'group__api__plugin__interface.html#1gaf3de1ce377c503a6a110ddc9a362a089'
    },
    {
      name: 'VRPFFINamespaceProc',
      brief: 'Function prototype for getting the FFI namespace/module name to use for this plugin',
    ref: 'group__api__plugin__interface.html#1gaf4b1cd5d64aeaab1cb389f120930778f'
    },
    {
      name: 'VRPLUGIN_IMPORT_PERMISSION',
      brief: 'Helper macro that checks and calls the registered VRPRequestPermissionProc to trigger an application license checkreturn 1 on failure, so should be used in a function that returns an int',
    ref: 'group__api__plugin__utils.html#1ga072a8e369f756705065859a1132520f6'
    },
    {
      name: 'VRPLUGIN_INIT_PERMISSION',
      brief: 'Helper macro that checks the existence of the registered VRPHasPermissionProc and calls itreturn 1 on failure, so should be used in a function that returns an int',
    ref: 'group__api__plugin__utils.html#1ga23167fd9a7a6681d375c6c1f3dfdf8be'
    },
    {
      name: 'VRPLUGIN_API_PERMISSIONIMPL',
      brief: 'Implements permission registration functions and provides static variables to store the registered permission functions, s_hasPermissionFunc and s_reqPermissionFunc',
    ref: 'group__api__plugin__utils.html#1ga5203c55e5e1756dd011672b6d82e4a40'
    },
    {
      name: 'LOG_DEBUG',
      brief: 'Type passed to a VRPLogProc for debug messages',
    ref: 'group__api__plugin__utils.html#1ga6ff63e8955665c4a58b1598f2b07c51a'
    },
    {
      name: 'VRPLUGIN_API_YIELDIMPL',
      brief: 'Implements progress yield registration function and wraps it in progress_yield',
    ref: 'group__api__plugin__utils.html#1ga734f96c0e474330c4bf6d2980c8dce65'
    },
    {
      name: 'VRPLUGIN_INJECT_CORE_YIELD',
      brief: 'Internal use for Virtalis plugins',
    ref: 'group__api__plugin__utils.html#1ga7a1a7358f657f3132f79b775ee0913fa'
    },
    {
      name: 'VRPLUGIN_INJECT_CORE_LOG',
      brief: 'Internal use for Virtalis plugins',
    ref: 'group__api__plugin__utils.html#1ga8c09dfb6ddd6c15d1a95756cac9836c3'
    },
    {
      name: 'registerYield',
      brief: 'Internal implementation of VRProgressYield which stores the progress function and exposes it via progress_yield',
    ref: 'group__api__plugin__utils.html#1ga9b5537881eb5b529c9c24a7611079eb5'
    },
    {
      name: 'VRPLUGIN_API_LOGIMPL',
      brief: 'Implements the log registration functions and provides static variables to store the registered log functions, s_logFunc and s_logIndentFunc',
    ref: 'group__api__plugin__utils.html#1gaa7cd5a9146a08f1a48e1e208753a2a01'
    },
    {
      name: 'VRPLUGIN_API_STDIMPL',
      brief: 'Implements the major and minor version query functions',
    ref: 'group__api__plugin__utils.html#1gaaf34056bf6129b6c27a8d64746bd4640'
    },
    {
      name: 'LOG_ERROR',
      brief: 'Type passed to a VRPLogProc for error messages',
    ref: 'group__api__plugin__utils.html#1gaced66975c154ea0e2a8ec3bc818b4e08'
    },
    {
      name: 'VRPLUGIN_API_IMPL',
      brief: 'Combines all helper impl macros',
    ref: 'group__api__plugin__utils.html#1gae02b36b7f64f5ccd10d0af2a24f34684'
    },
    {
      name: 'LOG_WARN',
      brief: 'Type passed to a VRPLogProc for warning messages',
    ref: 'group__api__plugin__utils.html#1gaea3f57d6dcc5b4ac957e2679e87dde27'
    },
    {
      name: 'LOG_INFO',
      brief: 'Type passed to a VRPLogProc for info ',
    ref: 'group__api__plugin__utils.html#1gaeb4f36db01bd128c7afeac5889dac311'
    },
    {
      name: 'VRPLUGIN_LOADVRTREE',
      brief: 'Loads all the VRTree C API entry points',
    ref: 'group__api__plugin__utils.html#1gaf975f29ab2fa2dd49515aea04a31c6be'
    },
    {
      name: 'progress_yield',
      brief: 'VRPLUGIN_API_YIELDIMPL will define the plugin registration function and implement it to provide the function pointer to this helper',
    ref: 'group__api__plugins.html#1ga2b02aa37acc689f91a28680841fbf544'
    },
    {
      name: 'VRTREE_APIENTRY',
      brief: 'Plugin function calling convention',
    ref: 'group__api__plugins.html#1ga4c1c9473682e2916f3055c7a04bdf782'
    },
    {
      name: 'PLUGIN_ENTRY_POINT',
      brief: 'Plugin function exports macro',
    ref: 'group__api__plugins.html#1gab8cba3805ffb95c8385bc952033f721c'
    },
    {
      name: 'VRSetPropertyValueEx',
      brief: 'Sets a property value on a node',
    ref: 'group__api__properties.html#1ga05ecce96e41f5f333bfb24e4843ef102'
    },
    {
      name: 'VRGetPropertyValueSizeEx',
      brief: 'Gets the required size of a buffer to pass to VRGetPropertyValue In the case of string properties, returns the length of the string including null terminator',
    ref: 'group__api__properties.html#1ga06f25470a98ec84510936b212e58de9d'
    },
    {
      name: 'VRSetPropertyValue',
      brief: 'Sets a property value on a node',
    ref: 'group__api__properties.html#1ga0dff6122089f05bb0f85a2064cb1fa38'
    },
    {
      name: 'VRSetPropertyCharElementEx',
      brief: 'Sets an element in a CHAR or BOOL array property on a node',
    ref: 'group__api__properties.html#1ga102147c1f6a53af831721542c915392c'
    },
    {
      name: 'VRGetPropertyDoubleElement',
      brief: 'Gets a DOUBLE array element from a node property',
    ref: 'group__api__properties.html#1ga12d8c73d1899ad5269fc4821ae67ca81'
    },
    {
      name: 'VRGetPropertyCharElementEx',
      brief: 'Gets a CHAR or BOOL array element from a node property',
    ref: 'group__api__properties.html#1ga1895db368129b48eaec55af8ac721a05'
    },
    {
      name: 'VRGetPropertyChar',
      brief: 'Gets a CHAR or BOOL property from a node',
    ref: 'group__api__properties.html#1ga1995816b54c1e5ab1c1a1c43b56606b7'
    },
    {
      name: 'VRSetPropertyStringEx',
      brief: 'Sets a STRING property on a node',
    ref: 'group__api__properties.html#1ga1d3b6d1b65f9f6c40a85e644f6378cec'
    },
    {
      name: 'VRGetPropertyArrayDoubleEx',
      brief: 'Gets the DOUBLE array from the property a node',
    ref: 'group__api__properties.html#1ga1e4c4d33b6a76610a5e768bfa4aa5a97'
    },
    {
      name: 'VRIsPropertyEnumValueEx',
      brief: 'Gets the int value of symbol and checks if the specified INT property is currently set to that value',
    ref: 'group__api__properties.html#1ga213c449d6e73900e8b5ae903b067f82c'
    },
    {
      name: 'VRSetPropertyLinkEx',
      brief: 'Sets a LINK property on a node',
    ref: 'group__api__properties.html#1ga297ebf1a80c55df916b14eb98ac682a9'
    },
    {
      name: 'VRGetPropertyIntElement',
      brief: 'Gets an INT array element from a node property',
    ref: 'group__api__properties.html#1ga2af41f33894c732f7b22b782cd9cae6c'
    },
    {
      name: 'VRSetPropertyLink',
      brief: 'Sets a LINK property on a node',
    ref: 'group__api__properties.html#1ga2af7e7d5f8b28a39d2fcbc4d6cb7c4e6'
    },
    {
      name: 'VRGetPropertyArrayFloat',
      brief: 'Gets a FLOAT array from a node property',
    ref: 'group__api__properties.html#1ga2c2a7173886a0173acf92352177389ed'
    },
    {
      name: 'VRSetPropertyArrayDouble',
      brief: 'Sets an array of doubles property on a node ',
    ref: 'group__api__properties.html#1ga357c43604df52fc3a89814b9d68df956'
    },
    {
      name: 'VRSetPropertyArrayFloatEx',
      brief: 'Sets an element in a float array property on a node',
    ref: 'group__api__properties.html#1ga35c6ea84643a2d6ed142871e79e8093a'
    },
    {
      name: 'VRGetPropertyArrayWorldFloat',
      brief: 'Gets a WORLD_FLOAT array element from a node property',
    ref: 'group__api__properties.html#1ga362dd617369648ec07d530646ebb6001'
    },
    {
      name: 'VRSetPropertyFloatElementEx',
      brief: 'Sets an element in a FLOAT array property on a node',
    ref: 'group__api__properties.html#1ga3b2f5a811475616e2c5e90ed3251d00c'
    },
    {
      name: 'VRGetPropertyStringElementEx',
      brief: 'Gets a STRING array element from a node property',
    ref: 'group__api__properties.html#1ga49c1c661ec6ea3486afeceb176dbbcec'
    },
    {
      name: 'VRSetPropertyArrayWorldFloatEx',
      brief: 'Sets an element in a world float array property on a node',
    ref: 'group__api__properties.html#1ga4b3bf52fac1840eca110bae224f466d8'
    },
    {
      name: 'VRSetPropertyDoubleEx',
      brief: 'Sets a DOUBLE property on a node',
    ref: 'group__api__properties.html#1ga4ff3ea33939e64c489adddc4f9862cf5'
    },
    {
      name: 'VRGetPropertyDouble',
      brief: 'Gets a DOUBLE property from a node',
    ref: 'group__api__properties.html#1ga5138edd6e0263ed3518e827be9046b80'
    },
    {
      name: 'VRGetPropertyString',
      brief: 'Gets a STRING property from a node',
    ref: 'group__api__properties.html#1ga515b3998f6063d0a37791e323bbf5c43'
    },
    {
      name: 'VRGetPropertyLink',
      brief: 'Gets a LINK property from a node',
    ref: 'group__api__properties.html#1ga54f8c3a287486848e374a78059eedcf5'
    },
    {
      name: 'VRSetPropertyStringElement',
      brief: 'Sets an element in a STRING array property on a node',
    ref: 'group__api__properties.html#1ga57c8066a2bb7d5f7b73f586fb1593296'
    },
    {
      name: 'VRSetPropertyChar',
      brief: 'Sets a CHAR or BOOL property on a node',
    ref: 'group__api__properties.html#1ga5804d9be491832bc6285c80f8bf1b9ea'
    },
    {
      name: 'VRGetPropertyEx',
      brief: 'Gets a reusable property handle from a metanode name',
    ref: 'group__api__properties.html#1ga607be6d8228e698bc6d1b84d8b2f4f00'
    },
    {
      name: 'VRGetPropertyValue',
      brief: 'Gets a property from a node',
    ref: 'group__api__properties.html#1ga64d2317ce606104b2f9b90f7954d3ef7'
    },
    {
      name: 'VRGetPropertyValueSize',
      brief: 'Gets the required size of a buffer to pass to VRGetPropertyValue',
    ref: 'group__api__properties.html#1ga657813d1eba31221dc2147a569f8cd0f'
    },
    {
      name: 'VRGetPropertyValueEx',
      brief: 'Gets a property from a node',
    ref: 'group__api__properties.html#1ga6bd9cf857d66a43eb40b130aa7606288'
    },
    {
      name: 'VRGetPropertyIntEx',
      brief: 'Gets an INT property from a node',
    ref: 'group__api__properties.html#1ga70d53fe283adbd5c4b10b41e1f43ddd7'
    },
    {
      name: 'VRSetPropertyArrayWorldFloat',
      brief: 'Sets an array of world float property on a node ',
    ref: 'group__api__properties.html#1ga730a07ca8151014f81acf815147e08b7'
    },
    {
      name: 'VRGetPropertyFloat',
      brief: 'Gets a FLOAT property from a node',
    ref: 'group__api__properties.html#1ga78d2bc23c763536d8b20476dd80128ea'
    },
    {
      name: 'VRSetPropertyDouble',
      brief: 'Sets a DOUBLE property on a node',
    ref: 'group__api__properties.html#1ga7c257380a2d521c26cd409ca0051fbed'
    },
    {
      name: 'VRGetPropertyStringElement',
      brief: 'Gets a STRING array element from a node property',
    ref: 'group__api__properties.html#1ga7d64074d2d15e5b855d5e87ff27f0a7d'
    },
    {
      name: 'VRSetPropertyArrayDoubleEx',
      brief: 'Sets an element in a double array property on a node',
    ref: 'group__api__properties.html#1ga85ab6fd1ceb984babf36dbed4cfc8457'
    },
    {
      name: 'VRSetPropertyFloatElement',
      brief: 'Sets an element in a FLOAT array property on a node',
    ref: 'group__api__properties.html#1ga86fa6038e530a33d5d8d671d94559cf3'
    },
    {
      name: 'VRGetPropertyFloatEx',
      brief: 'Gets a FLOAT property from a node',
    ref: 'group__api__properties.html#1ga8c8dc7ca5f28fc110d521b55d4dbe1cb'
    },
    {
      name: 'VRGetPropertyArrayFloatEx',
      brief: 'Gets the FLOAT array from the property a node',
    ref: 'group__api__properties.html#1ga8e135593a17d2440fa8a65979cf7c501'
    },
    {
      name: 'VRSetPropertyArrayFloat',
      brief: 'Sets an array of floats property on a node ',
    ref: 'group__api__properties.html#1ga8f49d002c6cbba473a5f3e660c0cefa9'
    },
    {
      name: 'VRGetPropertyFloatElementEx',
      brief: 'Gets a FLOAT array element from a node property',
    ref: 'group__api__properties.html#1ga92a877baf2a09c4d9ba861f083b5dc8f'
    },
    {
      name: 'VRSetPropertyString',
      brief: 'Sets a STRING property on a node',
    ref: 'group__api__properties.html#1ga94b32b72de11e5b877b5efd06b24164a'
    },
    {
      name: 'VRSetPropertyCharEx',
      brief: 'Sets a CHAR or BOOL property on a node',
    ref: 'group__api__properties.html#1ga966d1df244080ada933f80811f19fba2'
    },
    {
      name: 'VRGetPropertyDoubleEx',
      brief: 'Gets a DOUBLE property from a node',
    ref: 'group__api__properties.html#1ga9a2de7102f2352f83c668fa9a642087d'
    },
    {
      name: 'VRGetPropertyArrayDouble',
      brief: 'Gets a DOUBLE array element from a node property',
    ref: 'group__api__properties.html#1ga9ab99b3f71e79ea0fd7b3b3867122754'
    },
    {
      name: 'VRGetPropertyCharEx',
      brief: 'Gets a CHAR or BOOL property from a node',
    ref: 'group__api__properties.html#1ga9bbcf851ca8fb79ca81e255f74a62cc8'
    },
    {
      name: 'VRGetPropertyIntElementEx',
      brief: 'Gets an INT array element from a node property',
    ref: 'group__api__properties.html#1ga9ca943bbdb8ebb2186d2a1349b9ac424'
    },
    {
      name: 'VRGetPropertyArrayWorldFloatEx',
      brief: 'Gets the WORLD_FLOAT array from the property a node',
    ref: 'group__api__properties.html#1ga9dad418df1f04d80f5378a03c0790d62'
    },
    {
      name: 'VRSetPropertyIntEx',
      brief: 'Sets an INT property on a node',
    ref: 'group__api__properties.html#1gaa49f9253e91ab2568ff72497bbf1751e'
    },
    {
      name: 'VRSetPropertyStringElementEx',
      brief: 'Sets an element in a STRING array property on a node',
    ref: 'group__api__properties.html#1gaa8757c2d63dd10db6cd74f18968bc401'
    },
    {
      name: 'VRGetPropertyFloatElement',
      brief: 'Gets a FLOAT array element from a node property',
    ref: 'group__api__properties.html#1gaa8eb3cb7276af3bd3186ec12618d4bdf'
    },
    {
      name: 'VRSetPropertyFloat',
      brief: 'Sets a FLOAT property on a node',
    ref: 'group__api__properties.html#1gaa8fc02fb00477a9b54a4c7677450db53'
    },
    {
      name: 'VRSetPropertyEnum',
      brief: 'Sets an INT property on a node using the value of a symbol',
    ref: 'group__api__properties.html#1gab4276966dc506e9fe753bac7c002b29a'
    },
    {
      name: 'VRGetPropertyStringEx',
      brief: 'Gets a STRING property from a node',
    ref: 'group__api__properties.html#1gabf775cad5a3e3774b27f48749e77d467'
    },
    {
      name: 'VRSetPropertyFloatEx',
      brief: 'Sets a FLOAT property on a node',
    ref: 'group__api__properties.html#1gabf97bed66a8ab0752b26c8648708c061'
    },
    {
      name: 'VRIsPropertyEnumValue',
      brief: 'Gets the int value of symbol and checks if the specified INT property is currently set to that value',
    ref: 'group__api__properties.html#1gac4048dcce6c719567354da48c52c4a99'
    },
    {
      name: 'VRGetPropertyInt',
      brief: 'Gets an INT property from a node',
    ref: 'group__api__properties.html#1gac821ac959a1a4aee87ef44e721603929'
    },
    {
      name: 'VRSetPropertyEnumEx',
      brief: 'Sets an INT property on a node using the value of a symbol',
    ref: 'group__api__properties.html#1gacec21677db135b46a4bed6aa4bbb49ec'
    },
    {
      name: 'VRSetPropertyIntElement',
      brief: 'Sets an element in a INT array property on a node',
    ref: 'group__api__properties.html#1gacf6423f9945ed5970e74f8b758c1d203'
    },
    {
      name: 'VRGetPropertyDoubleElementEx',
      brief: 'Gets a DOUBLE array element from a node property',
    ref: 'group__api__properties.html#1gad1be5756a47a5887e55ec74a8237802c'
    },
    {
      name: 'VRGetWorldFloatSize',
      brief: '',
    ref: 'group__api__properties.html#1gad2a7c6f48dddcbbe1d5c9cda20689dc9'
    },
    {
      name: 'VRSetPropertyCharElement',
      brief: 'Sets an element in a CHAR or BOOL array property on a node',
    ref: 'group__api__properties.html#1gad4e56b980f636d462c278d53905e0648'
    },
    {
      name: 'VRSetPropertyDoubleElement',
      brief: 'Sets an element in a DOUBLE array property on a node',
    ref: 'group__api__properties.html#1gad8f9df2108a444dfc39a00c1818ced9d'
    },
    {
      name: 'VRGetPropertyCharElement',
      brief: 'Gets a CHAR or BOOL array element from a node property',
    ref: 'group__api__properties.html#1gae1a11d97c4df54ccf9d37bce405f2018'
    },
    {
      name: 'VRSetPropertyInt',
      brief: 'Sets an INT property on a node',
    ref: 'group__api__properties.html#1gae4f889eb40800f6034c74698f11803d7'
    },
    {
      name: 'VRSetPropertyIntElementEx',
      brief: 'Sets an element in a INT array property on a node',
    ref: 'group__api__properties.html#1gae5d4cd9a5411f340fffb77eeca37e282'
    },
    {
      name: 'VRSetPropertyDoubleElementEx',
      brief: 'Sets an element in a DOUBLE array property on a node',
    ref: 'group__api__properties.html#1gae70ae1a9c9ec88841cf1ee2f0ccd4247'
    },
    {
      name: 'VRGetWorldTransform',
      brief: 'Gets the world transform of the specified node from the transform hierarchy',
    ref: 'group__api__properties.html#1gae9a1b0fb86c4767fab3bde6474b38f6e'
    },
    {
      name: 'VRGetPropertyLinkEx',
      brief: 'Gets a LINK property from a node',
    ref: 'group__api__properties.html#1gaf30ef9dd48a86e1bc00de208ebaeef0d'
    },
    {
      name: 'VRGetProperty',
      brief: 'Gets a reusable property handle',
    ref: 'group__api__properties.html#1gaf43057c561596a57c0011ec6802b2b39'
    },
    {
      name: 'VRGetEnumValueEx',
      brief: 'Gets the value of an enum symbol in the context of the specified node type',
    ref: 'group__api__properties.html#1gaf882b2c2e2d012e4a860bce9b96179ed'
    },
    {
      name: 'VRGetEnumValue',
      brief: 'Gets the value of an enum symbol in the context of the specified node type',
    ref: 'group__api__properties.html#1gafb63d80417749b59cc834000f3846674'
    },
    {
      name: 'MigrationDownFunc',
      brief: 'Signature of a function that should perform a downgrade on a metanode',
    ref: 'group__api__proto.html#1ga0d6ecee7e4b7cd9b553f69afd13426a0'
    },
    {
      name: 'NodeChildRemovedFunc',
      brief: 'Signature of a function that is called when a child is removed from a node',
    ref: 'group__api__proto.html#1ga2a3503e6cda17ff4c5125972764b5ba2'
    },
    {
      name: 'FFIFunc',
      brief: 'Signature of a function that is exposed to the Lua environment',
    ref: 'group__api__proto.html#1ga498d7bb9178406b817b729fb0c936c9c'
    },
    {
      name: 'MigrationAddFunc',
      brief: 'Signature of a function that receives a new migration handle and should use it to register other callbacks',
    ref: 'group__api__proto.html#1ga4af6930196d827c38d7a8ef4c058dfdc'
    },
    {
      name: 'NodeCreatedFunc',
      brief: 'Signature of a function that is called when a node is created',
    ref: 'group__api__proto.html#1ga5591c49eba27cb6e4ecfc383073f4015'
    },
    {
      name: 'EventTwoNodesFunc',
      brief: 'Signature of a function that is called when two nodes interact ',
    ref: 'group__api__proto.html#1ga683d19e0087cc5be0d447f3c96444a50'
    },
    {
      name: 'ScriptEventFunc',
      brief: 'Signature of a function that is called in response to a registered script event',
    ref: 'group__api__proto.html#1ga6d8e217d6f6bec3f954c334284849117'
    },
    {
      name: 'MigrationUpFunc',
      brief: 'Signature of a function that should perform an upgrade on a metanode',
    ref: 'group__api__proto.html#1ga736e10cfed1c8e8bb91a340cac15ffd5'
    },
    {
      name: 'MigrationUpgradeFunc',
      brief: 'Signature of a function that should perform an upgrade on a node instance, e',
    ref: 'group__api__proto.html#1ga74153da315085d7c50f23c409afd9a03'
    },
    {
      name: 'MigrationDowngradeFunc',
      brief: 'Signature of a function that should perform a downgrade on a node instance',
    ref: 'group__api__proto.html#1ga8536dd988c51de0bf7530c402f3728c7'
    },
    {
      name: 'EventNodeFunc',
      brief: 'Signature of a function that is called when a node state is changed ',
    ref: 'group__api__proto.html#1ga8708da77fa521be83d964cebde2c13c3'
    },
    {
      name: 'SettingChangedFunc',
      brief: 'Signature of a function that is called when a setting is changed',
    ref: 'group__api__proto.html#1ga944e8b7a06ce9695b03772db333755e6'
    },
    {
      name: 'EventTwoNodesUserFunc',
      brief: 'Signature of a function that is called when two nodes interact ',
    ref: 'group__api__proto.html#1gaa908224d0372e3a24092d4d8fd0ff221'
    },
    {
      name: 'NodeChildAddedFunc',
      brief: 'Signature of a function that is called when a child is added to a node',
    ref: 'group__api__proto.html#1gaae33146d6dda20f3a027646e105e5e83'
    },
    {
      name: 'NodeValuesChangedFunc',
      brief: 'Signature of a function that is called when properties on a node are changed',
    ref: 'group__api__proto.html#1gab7859ac9c805781bad8444bd2233cb41'
    },
    {
      name: 'UpdateFunc',
      brief: 'Signature of a function that is called every frame',
    ref: 'group__api__proto.html#1gab86e65a2d0cdf9a0da13166b5f0758e4'
    },
    {
      name: 'NodeRenamedFunc',
      brief: 'Signature of a function that is called when a node is renamed',
    ref: 'group__api__proto.html#1gab9eb16731b8589f7fb38fbf2eefcdae9'
    },
    {
      name: 'NodeParentChangedFunc',
      brief: 'Signature of a function that is called when a node is moved to a new parent',
    ref: 'group__api__proto.html#1gac5b56756fb38ed07ff83e4b740db9969'
    },
    {
      name: 'NodeDestroyingFunc',
      brief: 'Signature of a function that is called when a node is about to be deleted',
    ref: 'group__api__proto.html#1gadba08cacf5871a5825411894bda72d4c'
    },
    {
      name: 'EventKeyFunc',
      brief: 'Signature of a function that is called when a key state is changed ',
    ref: 'group__api__proto.html#1gaecc6b18360b77bb263e6a43cc1c64fbe'
    },
    {
      name: 'EventGestureFunc',
      brief: 'Signature of a function that is called when a key code is changed ',
    ref: 'group__api__proto.html#1gaf188e51c4fc1a36bae155176fbe0ea57'
    },
    {
      name: 'MigrationFunc',
      brief: 'Signature of a function that is called at the end of a nodes migration calls',
    ref: 'group__api__proto.html#1gaf9fb2f851d4d5bd5bbdd7e85c7e73628'
    },
    {
      name: 'VRGetSettingSize',
      brief: 'Returns the number of bytes required to store a setting\'s value',
    ref: 'group__api__settings.html#1ga0baa1cf88059bbc31ab8f3123c963a5a'
    },
    {
      name: 'VRReadSettingBool',
      brief: 'Reads a boolean setting',
    ref: 'group__api__settings.html#1ga282dcc325f9a902f94d3e5ab42cf6643'
    },
    {
      name: 'VRReadSettingDouble',
      brief: 'Reads a double setting',
    ref: 'group__api__settings.html#1ga2f3ae0a615091b8a0ae1037624db1f1e'
    },
    {
      name: 'VRCreateSettingArrayDouble',
      brief: 'Creates a double array setting if it doesn\'t already exist',
    ref: 'group__api__settings.html#1ga33fc4a9faeae275f0cc24edee75a3004'
    },
    {
      name: 'VRReadSettingString',
      brief: 'Reads a string setting',
    ref: 'group__api__settings.html#1ga35f385ee391edfea8ff9218fb4afb158'
    },
    {
      name: 'VRAddSettingToScene',
      brief: 'Adds a scene override of a setting ',
    ref: 'group__api__settings.html#1ga38b28cd62ea12485c3a4af82db8f39e9'
    },
    {
      name: 'VRWriteSettingArrayDouble',
      brief: 'Sets the value of a double array setting',
    ref: 'group__api__settings.html#1ga3925e71021bf010993b354349e435647'
    },
    {
      name: 'VRReadSettingArrayDouble',
      brief: 'Reads a double array setting',
    ref: 'group__api__settings.html#1ga401b9d992923267642bdf1dc7408cd7e'
    },
    {
      name: 'VRCreateSettingDouble',
      brief: 'Creates a double setting if it doesn\'t already exist',
    ref: 'group__api__settings.html#1ga403cf24be2dc59cc05bf073531335b66'
    },
    {
      name: 'VRGetRootSettingNode',
      brief: 'Gets the VRTree node associated with the root of the settings hierarchy',
    ref: 'group__api__settings.html#1ga4349e2b793d813068530f7295e196b20'
    },
    {
      name: 'VRCreateSettingArrayInt',
      brief: 'Creates an integer array setting if it doesn\'t already exist',
    ref: 'group__api__settings.html#1ga49f7efffdc40a58e1452369bc9f7f6b4'
    },
    {
      name: 'VRReadSettingFloat',
      brief: 'Reads a float setting',
    ref: 'group__api__settings.html#1ga53ab7cda212e452faf600549082846e6'
    },
    {
      name: 'VRSetSettingFilter',
      brief: 'Assigns a filter to a setting',
    ref: 'group__api__settings.html#1ga63c87f73c8c5191b72d50a90a246da02'
    },
    {
      name: 'VRWriteSettingDouble',
      brief: 'Sets the value of a double setting',
    ref: 'group__api__settings.html#1ga6436898aa32e36a5cab6e753ef307e49'
    },
    {
      name: 'VRReadSettingInt',
      brief: 'Reads an int setting',
    ref: 'group__api__settings.html#1ga66297d5cafbb1f8943524dd2ed74af5e'
    },
    {
      name: 'VRCreateSettingFloat',
      brief: 'Creates a float setting if it doesn\'t already exist',
    ref: 'group__api__settings.html#1ga77559534facbf8803f4b4200aca77959'
    },
    {
      name: 'VRWriteSettingArrayInt',
      brief: 'Sets the value of an int array setting',
    ref: 'group__api__settings.html#1ga77d06bfeb0721f571107e893053533e8'
    },
    {
      name: 'VRCreateSettingLink',
      brief: 'Creates a link setting if it doesn\'t already exist',
    ref: 'group__api__settings.html#1ga77f4aed5f2cc617fbe8ddbb497afe913'
    },
    {
      name: 'VRCreateSettingInt',
      brief: 'Creates an integer setting if it doesn\'t already exist',
    ref: 'group__api__settings.html#1ga7b3e769030f23465a02f5ea9b34d9d7b'
    },
    {
      name: 'VRCreateSettingString',
      brief: 'Creates a string setting if it doesn\'t already exist',
    ref: 'group__api__settings.html#1ga7c75c7087bda6c74932b137244d5f09f'
    },
    {
      name: 'VRCreateSettingBool',
      brief: 'Creates a boolean setting if it doesn\'t already exist',
    ref: 'group__api__settings.html#1ga831f1d64e0f2a70543c4c56e49aeb36d'
    },
    {
      name: 'VRAddCallbackSettingChanged',
      brief: 'Registers a function to be called when a setting value changes',
    ref: 'group__api__settings.html#1ga8571066306cd9c291811cb1a71029eb8'
    },
    {
      name: 'VRWriteSettingLink',
      brief: 'Sets the value of a link setting',
    ref: 'group__api__settings.html#1ga8c4cb653bcb2a82bba5f3075af383b54'
    },
    {
      name: 'VRWriteSettingArrayFloat',
      brief: 'Sets the value of a float array setting',
    ref: 'group__api__settings.html#1ga97b935a2120c77ec86a35e3a5e964ec7'
    },
    {
      name: 'VRReadSettingArrayFloat',
      brief: 'Reads a float array setting',
    ref: 'group__api__settings.html#1ga9a0d3f24c3b388ced1b2fa6094bb0af4'
    },
    {
      name: 'VRSetSettingStep',
      brief: 'Assigns a step size to a numeric setting',
    ref: 'group__api__settings.html#1ga9b233f247fc69f015b8c866e342319de'
    },
    {
      name: 'VRReadSettingArrayInt',
      brief: 'Reads an int array setting',
    ref: 'group__api__settings.html#1gaa60506cbf66810df30b2385b219afbb5'
    },
    {
      name: 'VRWriteSettingFloat',
      brief: 'Sets the value of a float setting',
    ref: 'group__api__settings.html#1gaa6589c858cc2c5a189c0490bb0e2a806'
    },
    {
      name: 'VRWriteSettingString',
      brief: 'Sets the value of a string setting',
    ref: 'group__api__settings.html#1gaaa5a6852d393088fec0bf64299374b90'
    },
    {
      name: 'VRReadSettingLink',
      brief: 'Reads a link setting',
    ref: 'group__api__settings.html#1gaaa88e340e2203ecf0ee5ae2ba97edddc'
    },
    {
      name: 'VRCreateSettingArrayFloat',
      brief: 'Creates a float array setting if it doesn\'t already exist',
    ref: 'group__api__settings.html#1gab2e15b943abfee6ccc44746473ac50f5'
    },
    {
      name: 'VRSetSettingCaption',
      brief: 'Assigns a custom caption to a setting, allowing the text displayed to in user interface to be different from the setting name',
    ref: 'group__api__settings.html#1gab64dec6749d41a8530bf3670673753bf'
    },
    {
      name: 'VRWriteSettingBool',
      brief: 'Sets the value of a boolean setting',
    ref: 'group__api__settings.html#1gac1eed85e776389ce65853d656267d8d0'
    },
    {
      name: 'VRRemoveSettingFromScene',
      brief: 'Removes a scene override of a setting',
    ref: 'group__api__settings.html#1gad6f628d7bc89a23d31f54dc927385ced'
    },
    {
      name: 'VRRemoveCallbackSettingChanged',
      brief: 'Removes a callback that was added with VRAddCallbackSettingChanged',
    ref: 'group__api__settings.html#1gad89b1ef876bcdf3a592b658d42729ec6'
    },
    {
      name: 'VRGetSettingNode',
      brief: 'Gets the VRTree node associated with a setting',
    ref: 'group__api__settings.html#1gadad564530d97e8aea7a81e36c56c20bf'
    },
    {
      name: 'VRGetSceneRootSettingNode',
      brief: 'Gets the VRTree node associated with the root of the scene overrides, if present',
    ref: 'group__api__settings.html#1gaef05fe97c40eacfe723f7fed3abc46b2'
    },
    {
      name: 'VRWriteSettingInt',
      brief: 'Sets the value of an int setting',
    ref: 'group__api__settings.html#1gaf754ea969f38bf0766f69840126611cd'
    },
    {
      name: 'VRSetSettingType',
      brief: 'Assigns a type to a setting, which determines how the setting is presented in the user interface',
    ref: 'group__api__settings.html#1gaf8c1bfd23560c40136dd848d8ed7c3d7'
    },
    {
      name: 'VRSetSettingRange',
      brief: 'Assigns a range to a numeric setting',
    ref: 'group__api__settings.html#1gafb6258036f3c4efcccb1e3d99d233687'
    },
    {
      name: 'VRGetMetaNode',
      brief: 'Gets the metanode of a node',
    ref: 'group__api__tree.html#1ga06e3fd50a1c4973bba83a264be874065'
    },
    {
      name: 'VRGetPrevOfType',
      brief: 'Gets the previous sibling of a specific type',
    ref: 'group__api__tree.html#1ga0b54c4695bd2b648635b185a55e9c67e'
    },
    {
      name: 'VRIsDirtyEx',
      brief: 'Determines if a node value has been changed/dirtied',
    ref: 'group__api__tree.html#1ga12c79f76c2224edc16c74320f5d8701f'
    },
    {
      name: 'VRFindOrCreateChild',
      brief: 'Gets or creates a node matching metanode and name',
    ref: 'group__api__tree.html#1ga137c8954c17daf9a4b764816c3a39987'
    },
    {
      name: 'VRGetNodePathLength',
      brief: 'Gets the length of a node\'s path',
    ref: 'group__api__tree.html#1ga17a9d1dec6ab8f82537ff302776847c4'
    },
    {
      name: 'VRGetScenesNode',
      brief: 'Gets the VRTree scenes node',
    ref: 'group__api__tree.html#1ga19ed2b2b1a2f12a76597e9652b2022e4'
    },
    {
      name: 'VRSetParentEx',
      brief: 'Sets the parent of a node, specifying a sibling to insert after',
    ref: 'group__api__tree.html#1ga1e4bf67be1afd9729737c487eeaf50c6'
    },
    {
      name: 'VRFindChild',
      brief: 'Finds a direct child of startNode',
    ref: 'group__api__tree.html#1ga219f52632706779738173103bd7bd94e'
    },
    {
      name: 'VRGetChild',
      brief: 'Gets the first child of node',
    ref: 'group__api__tree.html#1ga3322073291a4b62e6411c03f37c83480'
    },
    {
      name: 'VRSaveTree',
      brief: 'Saves the tree to a VRText or VRNative format file on disk',
    ref: 'group__api__tree.html#1ga335f74edf407da89b8f0c815cad85f4b'
    },
    {
      name: 'VRGetNext',
      brief: 'Gets the next sibling of a node',
    ref: 'group__api__tree.html#1ga3901502bb06c86df844962d6cfe107b6'
    },
    {
      name: 'VRGetLibrariesNode',
      brief: 'Gets the VRTree libraries node',
    ref: 'group__api__tree.html#1ga3f62ca11f422f94bcc54b5d776d74cdf'
    },
    {
      name: 'VRGetSystemLibraryNode',
      brief: 'Gets the VRTree system library node',
    ref: 'group__api__tree.html#1ga4138a0ddfeed189dafe02ac5c69d6dd6'
    },
    {
      name: 'VRGetPrev',
      brief: 'Gets the previous sibling of a node',
    ref: 'group__api__tree.html#1ga43b47956867e023b79be49709e050323'
    },
    {
      name: 'VRGetNodePath',
      brief: 'Gets the path of a node',
    ref: 'group__api__tree.html#1ga4a3f14fa5b29c38ae76fc2d08e98fb18'
    },
    {
      name: 'VRGetNextOfType',
      brief: 'Gets the next sibling of a specific type',
    ref: 'group__api__tree.html#1ga4bab1a1bb980cb5040db460bf8e4bc09'
    },
    {
      name: 'VRGetUsersNode',
      brief: 'Gets the VRTree users node',
    ref: 'group__api__tree.html#1ga4e2315709a37bcb61fbecc15413ed040'
    },
    {
      name: 'VRCreateNode',
      brief: 'Creates a node',
    ref: 'group__api__tree.html#1ga5176b13edfcfcc1906b71c3acc69313e'
    },
    {
      name: 'VRGetChildOfType',
      brief: 'Gets the first child of a specific type',
    ref: 'group__api__tree.html#1ga536b8b69d013c4900819bed704118357'
    },
    {
      name: 'VRGetRootNode',
      brief: 'Gets the VRTree root node',
    ref: 'group__api__tree.html#1ga57b371be8b413bf3d0b14a1fb29d6000'
    },
    {
      name: 'VRCompareNode',
      brief: 'Compares all the properties on both nodes to make sure they are equal',
    ref: 'group__api__tree.html#1ga5ab60d680f3bf262df5f50e79949b0cf'
    },
    {
      name: 'VRSetNodeName',
      brief: 'Sets the name of a node',
    ref: 'group__api__tree.html#1ga5dd7f559a8d299819f8f19bc63cdd394'
    },
    {
      name: 'VRIsType',
      brief: 'Determines if a node is of a particular type',
    ref: 'group__api__tree.html#1ga60451750862c4d6ea11e0aa843c96292'
    },
    {
      name: 'VRLoadTree',
      brief: 'Loads a VRText or VRNative format file from disk',
    ref: 'group__api__tree.html#1ga659e653d18340bf3b8c9ac6faa057be1'
    },
    {
      name: 'VRFindChildPooled',
      brief: 'Finds a direct child of startNode by specifying name and type',
    ref: 'group__api__tree.html#1ga795f3b584de47cd5a6722aeb39d0ad90'
    },
    {
      name: 'VRFindOrCreateChildEx',
      brief: 'Gets or creates a node matching metanode and name',
    ref: 'group__api__tree.html#1ga7bccbf0f84899a898e26beda1798dcde'
    },
    {
      name: 'VRGetThisUser',
      brief: 'Gets the VRTree user node',
    ref: 'group__api__tree.html#1ga80600c9e961cb3a90b036394b5332f37'
    },
    {
      name: 'VRFind',
      brief: 'Finds a descendant of startNode using its path',
    ref: 'group__api__tree.html#1ga85ccf11961cb8beaaeb41526fac0d260'
    },
    {
      name: 'VRIsNodeName',
      brief: 'Checks if the name of the node is equal to parameter',
    ref: 'group__api__tree.html#1ga8bbda801f732fd218376263d7552db6a'
    },
    {
      name: 'VRGetNodeNameLength',
      brief: 'Gets the length of a node\'s name, plus 1 for the trailing null terminator',
    ref: 'group__api__tree.html#1ga90438d3ba5aa37de6d7d17fbe631b025'
    },
    {
      name: 'VRGetNodeName',
      brief: 'Gets the name of a node',
    ref: 'group__api__tree.html#1ga918a0d058cf5106903af87a4eeab733a'
    },
    {
      name: 'VRDeleteNode',
      brief: 'Deletes a node and all its children',
    ref: 'group__api__tree.html#1ga9ec16763b29fae530ef722c72f77172b'
    },
    {
      name: 'VRIsAncestor',
      brief: 'Checks if node a is an ancestor of node b',
    ref: 'group__api__tree.html#1gaa0fa8225d9fd062a3676c1a5a53b111b'
    },
    {
      name: 'VRSaveTreeEx',
      brief: 'Saves the tree to a VRText or VRNative format file on disk',
    ref: 'group__api__tree.html#1gaa570ab310cde8964e33016befed3590b'
    },
    {
      name: 'VRIsDirty',
      brief: 'Determines if a node value has been changed/dirtied',
    ref: 'group__api__tree.html#1gaa9422ab5c98da141003ed3ae18a294f5'
    },
    {
      name: 'VRGetTypeLength',
      brief: 'Gets the length of the type name of a node',
    ref: 'group__api__tree.html#1gab79e7cad4b917860b090e8a3d4d1f6bf'
    },
    {
      name: 'VRSetNodeUserData',
      brief: 'Stores a pointer on the node',
    ref: 'group__api__tree.html#1gac33b32d08055f918fa25e6d79bfde3b9'
    },
    {
      name: 'VRGetType',
      brief: 'Gets the type of a node',
    ref: 'group__api__tree.html#1gac348c3959b5536352871bbebe31b1e4a'
    },
    {
      name: 'VRLoadTreeEx',
      brief: 'Loads a VRText or VRNative format file from disk',
    ref: 'group__api__tree.html#1gac71e5a62b0bba8a67edc33d7047b5c18'
    },
    {
      name: 'VRSetParent',
      brief: 'Sets the parent of a node, adding it as the last child',
    ref: 'group__api__tree.html#1gac93a1918ef7d92ab8a169e29c8c4740d'
    },
    {
      name: 'VRGetNodeUserData',
      brief: 'Stores a pointer on the node',
    ref: 'group__api__tree.html#1gacf37c840f7ac3218c3ef0e37da694029'
    },
    {
      name: 'VRCreateNodeEx',
      brief: 'Creates a node',
    ref: 'group__api__tree.html#1gada214d6a4e85264e202fa7acf0d4a5c3'
    },
    {
      name: 'VRCloneNode',
      brief: 'Clones an existing node',
    ref: 'group__api__tree.html#1gadcf16505e4853ee07695d4f23156f31e'
    },
    {
      name: 'VRIsSameNode',
      brief: 'Checks if two node handles are pointing at the same node',
    ref: 'group__api__tree.html#1gae296ca407fec31a45d44e4c99c638ef0'
    },
    {
      name: 'VRGetParent',
      brief: 'Gets the parent of a node',
    ref: 'group__api__tree.html#1gaf710f34ed77a9990dd0ebae2eb14aa4c'
    },
    {
      name: 'HAuth',
      brief: 'A handle to a security context',
    ref: 'group__api__types.html#1ga26f52d03bf0ec1139aacc0ec7884790e'
    },
    {
      name: 'HUserSlot',
      brief: 'A handle to a userdata slot on a VRTree node',
    ref: 'group__api__types.html#1ga366e0c2f7c1af8e9a3f62c12d642938e'
    },
    {
      name: 'HNode',
      brief: 'A handle to a VRTree node',
    ref: 'group__api__types.html#1ga3c71423354ddfdf4e557ebb3ac0e572e'
    },
    {
      name: 'HMigration',
      brief: 'A handle to a migration description',
    ref: 'group__api__types.html#1ga4ada4738a1bf8a57498a2440094f5523'
    },
    {
      name: 'HFFIVar',
      brief: 'A handle to a variable passed through the foreign function interface ',
    ref: 'group__api__types.html#1ga4eed302e3e04fe95c2324469652eb0ee'
    },
    {
      name: 'HMeta',
      brief: 'A handle to a VRTree metanode',
    ref: 'group__api__types.html#1ga6ceb390224eb2ed612021697f363c4a3'
    },
    {
      name: 'TextureInfo',
      brief: '',
    ref: 'group__api__types.html#1gaa6e136713ecd22c3b45c71217f48531b'
    },
    {
      name: 'VRBlobToDDSPropertyEx',
      brief: 'Helper function for converting it to DDS, and storing it in the specified char vector property',
    ref: 'group__api__utils.html#1ga1745e35c668f4873da15b27256d4b08f'
    },
    {
      name: 'VRBlobToDDSPropertyV2',
      brief: 'Helper function for converting it to DDS, and storing it in the specified char vector property',
    ref: 'group__api__utils.html#1ga2b523c9d386fbbfd38461878a641346f'
    },
    {
      name: 'VRFileToDDSPropertyEx',
      brief: 'Helper function for loading an image file from disk, converting it to DDS, and storing it in the specified char vector property',
    ref: 'group__api__utils.html#1ga42fbe0e4e20a23b953f14f428f14ec8d'
    },
    {
      name: 'VRGetTextureFormat',
      brief: 'Helper function for getting the OpenGL texture format out of a texture node',
    ref: 'group__api__utils.html#1ga5997a2a5ecc4955445fbd0cb3d5f0ecf'
    },
    {
      name: 'VRBlobToDDSPropertyV2Ex',
      brief: 'Helper function for converting it to DDS, and storing it in the specified char vector property',
    ref: 'group__api__utils.html#1ga675df8d25fa7c9a524277eb0fe85761e'
    },
    {
      name: 'VRBlobToDDSProperty',
      brief: 'Helper function for converting it to DDS, and storing it in the specified char vector property',
    ref: 'group__api__utils.html#1ga7b3abe534851919d9ce29ee170937730'
    },
    {
      name: 'VRFileToDDSProperty',
      brief: 'Helper function for loading an image file from disk, converting it to DDS, and storing it in the specified char vector property',
    ref: 'group__api__utils.html#1ga9319aa5cae89eb1aedabfa33f41d33f4'
    },
    {
      name: 'VRGetTextureInfo',
      brief: 'Helper function for getting the OpenGL texture information out of a texture node',
    ref: 'group__api__utils.html#1gaeeeeeac201620e9baf3e2b47c8013ae3'
    },
    {
      name: 'RegisterManikinMetaNodes',
      brief: '',
    ref: 'meta__manikin_8hpp.html#1a398e2c6687a1c7db1ff552435e5d6ff8'
    },
    {
      name: 'RegisterReachMetaNodes',
      brief: '',
    ref: 'meta__remotenodes_8hpp.html#1a6d56d024c20c7dfefce8345e6fef07e5'
    },
    {
      name: 'readStringProp',
      brief: 'Utility function for reading a string property',
    ref: 'namespacevrtree__cpp.html#1a02ff9619da2789d38e20ef57628a0629'
    },
    {
      name: 'getNodeName',
      brief: 'Utility function for getting the name of a node',
    ref: 'namespacevrtree__cpp.html#1a25951a619ec114234b4a72a569f09847'
    },
    {
      name: 'RegisterObserver',
      brief: 'Registers a class implementing static observer functions as an observer of the specified metanode',
    ref: 'namespacevrtree__cpp.html#1a3f470374d57d84465e4fd7d55007f084'
    },
    {
      name: 'HMetaR',
      brief: 'Reference counted metanode handle',
    ref: 'namespacevrtree__cpp.html#1a6e64105273c7c3b1b2839379bbe7e425'
    },
    {
      name: 'HNodeR',
      brief: 'Reference counted node handle',
    ref: 'namespacevrtree__cpp.html#1a747ed5202c45e530717dffdffed0da8f'
    },
    {
      name: 'readStringProp',
      brief: 'Utility function for reading a string property',
    ref: 'namespacevrtree__cpp.html#1a875f5d1b0cb7e659f6da20b6eab73433'
    },
    {
      name: 'getNodePath',
      brief: 'Utility function for getting the path of a node',
    ref: 'namespacevrtree__cpp.html#1aad947bc31b1480e620b582cb2d1cb98b'
    },
    {
      name: 'HFFIVarR',
      brief: 'Reference counted FFI handle',
    ref: 'namespacevrtree__cpp.html#1adb227fb5889aa7a374a7ce0475d8a7b0'
    },
    {
      name: 'HMigrationR',
      brief: 'Reference counted migration handle',
    ref: 'namespacevrtree__cpp.html#1afdb58ff37d845dd8b37cf833b7b07465'
    },
    {
      name: 'UnRegisterObserver',
      brief: 'Unregisters a class implementing static observer functions as an observer of the specified metanode',
    ref: 'namespacevrtree__cpp.html#1aff356c215359cb74eabdaa33951a7a62'
    },
    {
      name: 'target',
      brief: '',
    ref: 'struct___texture_info.html#1a16b36c1cf012b42cfd3ca0ddecca7f01'
    },
    {
      name: 'width',
      brief: '',
    ref: 'struct___texture_info.html#1a5613134f08cf311729788b2aa3a82982'
    },
    {
      name: 'height',
      brief: '',
    ref: 'struct___texture_info.html#1a86f9154e69cc35fab88577c57d38b48c'
    },
    {
      name: 'mipLevels',
      brief: '',
    ref: 'struct___texture_info.html#1aa9e6bcee854dfc962a97645f8d5cf789'
    },
    {
      name: 'depth',
      brief: '',
    ref: 'struct___texture_info.html#1ad0703b45aef2b423b14dfd9cf2f9f375'
    },
    {
      name: 'format',
      brief: '',
    ref: 'struct___texture_info.html#1af097b9b94eb3343700cdccefff42f7f5'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___a_r_marker.html#1a3aed844264fa40de49c71a9643f9e991'
    },
    {
      name: 'Mode',
      brief: '',
    ref: 'struct_meta___a_r_marker.html#1a7d4213ae93d9d8c69dd79b647b780488'
    },
    {
      name: 'HelperType',
      brief: '',
    ref: 'struct_meta___a_r_marker.html#1aac73ab5aa68d8a1d938b486fd2967811'
    },
    {
      name: 'Axis',
      brief: 'Values for Idx_Axis',
    ref: 'struct_meta___animation.html#1a01bd8a35206d76ced2a2e837aafe5746'
    },
    {
      name: 'AxisOrder',
      brief: 'Values for Idx_AxisOrder',
    ref: 'struct_meta___animation.html#1a1cd657f1f4b4230e259004649e23f733'
    },
    {
      name: 'RotationMethod',
      brief: 'Values for Idx_RotationMethod',
    ref: 'struct_meta___animation.html#1a7a1b2ed69742a84e957c47266ae32ca6'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___animation.html#1a9bee1c079a7c44df625f089b6820665f'
    },
    {
      name: 'Interpolation',
      brief: 'Values for Idx_Interpolation',
    ref: 'struct_meta___animation.html#1ad72c9f2f71e96aab28418380742fcafd'
    },
    {
      name: 'OrientTo',
      brief: 'Values for Idx_OrientTo',
    ref: 'struct_meta___animation.html#1ae9a0d73a6b20765259de3895443cdbe3'
    },
    {
      name: 'Type',
      brief: 'Values for Idx_Type',
    ref: 'struct_meta___animation_action.html#1a328452c794781ed2f99a7a4a66e69180'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___animation_action.html#1ac1d226b1f953b46809d74391f45bd503'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___animation_frame_p_r_s.html#1a290434bc0cf4e5f8946b4f33f7c479b9'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___animation_link.html#1aa5106408c35caf5a6588b7c702d98f32'
    },
    {
      name: 'IDX',
      brief: '',
    ref: 'struct_meta___annotation.html#1a7122fdfea223366df6e44d94e5432d61'
    },
    {
      name: 'IDX',
      brief: '',
    ref: 'struct_meta___annotation_comment.html#1a3de40a9554461bc6d803f08dea025401'
    },
    {
      name: 'IDX',
      brief: '',
    ref: 'struct_meta___annotation_list.html#1a87f65cb25636268c309e054c418e6946'
    },
    {
      name: 'IDX',
      brief: '',
    ref: 'struct_meta___application_menu_container.html#1ac14d42886915ff67f41e209c7e8b1347'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___application_menu_custom.html#1a01184415248dbf5d33613930af4626a4'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___application_menu_entry.html#1ab97f7460c0815bb633934c65f459b340'
    },
    {
      name: 'AppMenuEntryType',
      brief: 'Values for Idx_Type',
    ref: 'struct_meta___application_menu_entry.html#1ac68bf464c6bd818e3029033c57eb974d'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___application_menu_header.html#1a57e5662e6143122e867cbe849f244ba1'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___application_menu_separator.html#1a5e3a8b92ec3fb4c38435c7f5ec45ca04'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___assembly.html#1a3b74a144de0624a8a110e9fdba8de5f9'
    },
    {
      name: 'LAYERS',
      brief: 'Values for Idx_CollisionLayer',
    ref: 'struct_meta___assembly.html#1a4c4a00b2bdc067023e758f0c66d87695'
    },
    {
      name: 'CONSTRAINT_TYPE',
      brief: 'Values for Idx_Constraint',
    ref: 'struct_meta___assembly.html#1aa8d3753e32722f1478ec8c172d12b4b3'
    },
    {
      name: 'IDX',
      brief: 'Property Index',
    ref: 'struct_meta___assembly_p_r_s.html#1aa0e7242e69e48becfd562b17a07adedd'
    },
    {
      name: 'TransformMode',
      brief: 'Values for Idx_TransformMode',
    ref: 'struct_meta___assembly_track.html#1a9fb14b505d7d96c14b013de19023970f'
    },
    {
      name: 'State',
      brief: 'Values for Idx_State',
    ref: 'struct_meta___assembly_track.html#1aa0473539bfee4d29ba31b1cf21329bac'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___assembly_track.html#1ae8b0fa9b935ac101c6c967a92b746a83'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___audio_buffer.html#1ab3200ae0b5aa733e7dc13122c9c3130b'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___audio_sound.html#1ac978567e8d75840778032785c2e7b024'
    },
    {
      name: 'RelativeTo',
      brief: 'Values for Idx_RelativeTo',
    ref: 'struct_meta___audio_sound.html#1ae523eb34299aebedbf29af692502a5b7'
    },
    {
      name: 'TransformMode',
      brief: 'Values for Idx_TransformMode',
    ref: 'struct_meta___audio_stream.html#1a4d327aefca5b9060f488670035018329'
    },
    {
      name: 'IDX',
      brief: '',
    ref: 'struct_meta___audio_stream.html#1a8236a49c1c449a3f5671389ea55c0e03'
    },
    {
      name: 'Meta_AudioStream',
      brief: '',
    ref: 'struct_meta___audio_stream.html#1aa08a09b75f954d18d95d8d9b0b178f08'
    },
    {
      name: 'Meta_AudioStreamBuffer',
      brief: '',
    ref: 'struct_meta___audio_stream_buffer.html#1a4da5115e57c0c7b2eed34144c2e6f9cd'
    },
    {
      name: '@0',
      brief: '',
    ref: 'struct_meta___audio_stream_buffer.html#1a511d75c07eb25ca484db7d77dc25bfdd'
    },
    {
      name: 'IDX',
      brief: '',
    ref: 'struct_meta___audio_stream_buffer.html#1ac4b7bb52ad9657fe91eeccd90f9c35a0'
    },
    {
      name: 'IDX',
      brief: 'Property Index',
    ref: 'struct_meta___audio_track.html#1a0394751580da91da5f7cf1eeeb2bfff7'
    },
    {
      name: 'State',
      brief: 'Values for Idx_State',
    ref: 'struct_meta___audio_track.html#1aa603dcfbd72af3ee6ad120255422899d'
    },
    {
      name: 'RelativeTo',
      brief: 'Values for Idx_RelativeTo',
    ref: 'struct_meta___audio_track.html#1ac4aa12cf62cd4d37d9b263c3dd0bfe8e'
    },
    {
      name: 'ALIGNMODE',
      brief: 'Values for Idx_AlignMode',
    ref: 'struct_meta___billboard.html#1a1d3f8fa39ec61dd3f16580706fa3d784'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___billboard.html#1a298682ab34ae5ac8f7ec4b3847721f43'
    },
    {
      name: 'SIZEMODE',
      brief: 'Values for Idx_SizeMode',
    ref: 'struct_meta___billboard.html#1ab0b342269087c48fb2968f62a71cf519'
    },
    {
      name: 'POSITIONMODE',
      brief: 'Values for Idx_PositionMode',
    ref: 'struct_meta___billboard.html#1ac5036236f57373f0e60ac8ad57f3e817'
    },
    {
      name: 'IDX',
      brief: '',
    ref: 'struct_meta___bone.html#1ab44fe122e41e95f11d21634e66a05824'
    },
    {
      name: 'Axis',
      brief: 'Values for the Axis property',
    ref: 'struct_meta___bone.html#1ac00475f9087def7a10cbc20f4bb595b8'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___buffered_stack.html#1a777a2f9abd2cc64965cd22494c896cb8'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___button.html#1aca27689ad67745ee9b058bbcd0a55fb0'
    },
    {
      name: 'ConstraintType',
      brief: 'Values for IDX_ConstraintType',
    ref: 'struct_meta___camera.html#1a857b82275468fa0c469a8894aa1abd85'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___camera.html#1ae34b23f2950d2aa9bd0a6b034814bd4c'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___camera_collision_guard.html#1a6482aa41e5fc76fa9b9482c0ec6ea9e0'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___chroma_key_texture.html#1aa3e8229c41b32440a7a3c101724771ce'
    },
    {
      name: 'GROUP_HELPERS',
      brief: 'defines a collision group for immersive helpers that require collision with the avatar but with not the picking rays ',
    ref: 'struct_meta___collision.html#1a1d09ca2063289eea6a17efe1ebf5b87f'
    },
    {
      name: 'GROUP_PICKING',
      brief: 'defines a Mockup compatible collide group; PICKING objects only collide with PICKABLE objects ',
    ref: 'struct_meta___collision.html#1a318121c0e06ac4645120cb0f75bdf4da'
    },
    {
      name: 'GROUP_DEFAULT',
      brief: 'defines a standard collision group; DEFAULT objects collide with everything other than PICKING and PICKABLE objects ',
    ref: 'struct_meta___collision.html#1a39704bb35b5945774e745b8552e425ae'
    },
    {
      name: 'GROUP_CAMERA',
      brief: 'defines a collision group for cameras ',
    ref: 'struct_meta___collision.html#1a6ab43e09a0f922176b5f5e30178d0cb8'
    },
    {
      name: 'CollideType',
      brief: 'Values for Idx_Type',
    ref: 'struct_meta___collision.html#1a6f5bfd0806977d3656dbc15af0eda5a6'
    },
    {
      name: 'ShapeMode',
      brief: 'Values for Idx_Mode',
    ref: 'struct_meta___collision.html#1a719b6b449217eec7dbefeffee3e590e2'
    },
    {
      name: 'GROUP_VISUAL',
      brief: 'defines a collision group for Skinny bodies that have a Fat sibling - always the visual mesh ',
    ref: 'struct_meta___collision.html#1a88e9eb91293f4cda69582bb802f256b5'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___collision.html#1aa825b8080fe4944213ccad1d60faf1f3'
    },
    {
      name: 'GROUP_PICKABLE',
      brief: 'defines a Mockup compatible collide group; PICKABLE objects only collide with PICKING objects ',
    ref: 'struct_meta___collision.html#1ab1264f0189704c2696b77dbbbe5f22c0'
    },
    {
      name: 'GROUP_SYSTEM',
      brief: 'defines a collide group for the systems always on picking - Skinnies without a Fat sibling ',
    ref: 'struct_meta___collision.html#1ac1f87e0011b8f71afd1df494884a86fb'
    },
    {
      name: 'CollideReport',
      brief: 'Values for Idx_Report',
    ref: 'struct_meta___collision.html#1ac6e444342bdedc25836defa48dbab3ec'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___collision_guard.html#1a1cd979acea7a11d96da4df043bdc21e4'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___coloured_button_style.html#1aa4fd294009b60d439b0f8fe4fa92b051'
    },
    {
      name: 'ImagePosition',
      brief: 'Values for Idx_ImagePosition',
    ref: 'struct_meta___coloured_button_style.html#1ae535bb2bab932d22fbdcf2783de9d9b6'
    },
    {
      name: 'IDX',
      brief: '',
    ref: 'struct_meta___coloured_label_style.html#1a31dcd1079a05f3eb30425ad95bd989b4'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___coloured_panel_style.html#1af135e8a20a7248f3df0a7f796522e68b'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___coloured_separator_style.html#1a093a745ae054ce69ab1f7c20424e3f1e'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___component_track.html#1a53d7a47ef78e9867eb112aa3debaae00'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___container.html#1a194c20c61753729ae854bb69114241e1'
    },
    {
      name: 'Meta_ConvexDecomposition',
      brief: '',
    ref: 'struct_meta___convex_decomposition.html#1a21a7a1abe6d8c393edd0a2ad2e3cd099'
    },
    {
      name: 'IDX',
      brief: '',
    ref: 'struct_meta___convex_decomposition.html#1a3df721b9c5de66dc2b8ef19225e3891a'
    },
    {
      name: 'IDX',
      brief: '',
    ref: 'struct_meta___deformable.html#1a00bcb47be8861a71dcd172170f76b620'
    },
    {
      name: '@8',
      brief: 'Property index',
    ref: 'struct_meta___dimension.html#1a6d9bac068d34ff5a76e902a74780d7c1'
    },
    {
      name: 'IDX',
      brief: '',
    ref: 'struct_meta___dummy_h_m_d_viewport.html#1a348e1f4c21784bbc8c770a645f4e30f8'
    },
    {
      name: 'AXISALIGNMODE',
      brief: 'Values for Idx_AlignMode',
    ref: 'struct_meta___dynamic_section.html#1a6227a1849c04b517b274570eafce394b'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___dynamic_section.html#1a807361798f1dbfb4c87651412fb478b7'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___environment.html#1aabc11552e8071ec8e3378b125b37ef90'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___event_function.html#1af58ba54540a49e4f273bfb2d2ac192d3'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___event_handler.html#1a68507932a8a19d98af1efeb2d65dd5cc'
    },
    {
      name: 'AddSystemDoc',
      brief: '',
    ref: 'struct_meta___event_script.html#1a3e484a7400763c59d942ae4d228cb6e1'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___event_script.html#1ab5c0e72dda120cb4f0b3a873a15bf1d4'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___eyes.html#1a7f1f56abbc2dbaa3df8c4142f09338e9'
    },
    {
      name: 'AlignToScreenMode',
      brief: 'Values for Idx_AlignToScreen',
    ref: 'struct_meta___eyes.html#1a90cb26dcda5bd56d344e99b2819137ea'
    },
    {
      name: 'sm_MaxFontSize',
      brief: '',
    ref: 'struct_meta___font.html#1a1a48e9da1f2259d19334bceeb8b8f5d0'
    },
    {
      name: 'CharacterSet',
      brief: 'Types for Idx_CharacterSet',
    ref: 'struct_meta___font.html#1a6839bb5eb66d891cc3de0410c195dfd4'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___font.html#1acdec5a3c0155aba38a81ff8aa2cbd633'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___g_u_i.html#1a953575d1c4bf01dfc6428d59470e5359'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___g_u_i_material.html#1a5f835123bf64aefa2532178b20d18b76'
    },
    {
      name: 'Layer',
      brief: 'Values for the X element of Idx_LayerValue',
    ref: 'struct_meta___g_u_i_material.html#1a7097d46bd01111512c384127dec04d7a'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___g_u_i_property_link.html#1a38a1b80d35cd8c68fe8621f0cff15931'
    },
    {
      name: 'DrawMode',
      brief: 'Values for Idx_DrawMode',
    ref: 'struct_meta___geo_group.html#1a68e4d9868bdf6da8a054c65206f4ea09'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___geo_group.html#1ac58532c73252f56b49b89e7c60b59468'
    },
    {
      name: 'CullFace',
      brief: 'Values for Idx_CullFace',
    ref: 'struct_meta___geo_group.html#1af413079aaf03559d2e3d4003a277fb10'
    },
    {
      name: 'GestureType',
      brief: 'Values for Idx_Type',
    ref: 'struct_meta___gesture.html#1a6b4f91ffdcd77172aae837c3c661cf75'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___gesture.html#1a9622c110bfc69e48117d9cd63c19850c'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___gesture_guard.html#1abb042651fe65138c50f0752b71e50940'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___gradient.html#1a2259f391c399a641b46274d23814ac73'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___gradient_panel_style.html#1a7634063f834ad7453ef16380ae5faf35'
    },
    {
      name: '@4',
      brief: 'Property index',
    ref: 'struct_meta___gradient_point.html#1a2e6df8c23db50ca3d4ba953637959711'
    },
    {
      name: 'IDX',
      brief: 'Property Index',
    ref: 'struct_meta___group_member.html#1ab322fc2dd971c49836b7e10ae232c40c'
    },
    {
      name: '@16',
      brief: '',
    ref: 'struct_meta___gui_group_hint.html#1afe643b635044aaa70ef51f3ae094f105'
    },
    {
      name: 'SearchMode',
      brief: '',
    ref: 'struct_meta___gui_hints.html#1a76acf238f41a82187b8a1cafa18aa899'
    },
    {
      name: '@14',
      brief: '',
    ref: 'struct_meta___gui_hints.html#1af328972058b74da7ca33ee73e86d54c1'
    },
    {
      name: '@13',
      brief: '',
    ref: 'struct_meta___gui_hints_link.html#1a9699f39d327462498ddba584604ee470'
    },
    {
      name: '@15',
      brief: '',
    ref: 'struct_meta___gui_option_hint.html#1a62ffc4224b13901cdb28856126d92a24'
    },
    {
      name: '@17',
      brief: '',
    ref: 'struct_meta___gui_order_hint.html#1aab89b617a5f6ae490f516b19ac9c62b2'
    },
    {
      name: 'SpaceMode',
      brief: 'Values for Idx_HapticSpaceMode',
    ref: 'struct_meta___haptic_device.html#1a1b09a8ffaf28c1f885744a31dc10f191'
    },
    {
      name: '@6',
      brief: 'Property index',
    ref: 'struct_meta___haptic_device.html#1a279ffae6384827f04503f46b4902f05c'
    },
    {
      name: 'TouchableFace',
      brief: 'Values for Idx_TouchableFace',
    ref: 'struct_meta___haptic_device.html#1a2a94607307a17ab8ef101e2d1f58ad1c'
    },
    {
      name: '@5',
      brief: 'Property index',
    ref: 'struct_meta___haptic_node.html#1a220eb871e812b1af03e1cd6aa15f6871'
    },
    {
      name: 'CollisionNodeType',
      brief: 'Values for Idx_Type',
    ref: 'struct_meta___haptic_node.html#1a7d73c30b3db64ac9582839b033e094d7'
    },
    {
      name: 'IDX',
      brief: '',
    ref: 'struct_meta___hololens_remoting_viewport.html#1ae2a4195dd11e8ce3250ed7bca13551b8'
    },
    {
      name: 'SizeMode',
      brief: 'Values for Idx_SizeMode',
    ref: 'struct_meta___image_marker_style.html#1a5979402ca2775527d32bf73f84da7532'
    },
    {
      name: 'AlignMode',
      brief: 'Values for Idx_AlignMode',
    ref: 'struct_meta___image_marker_style.html#1a5eaa24e790a0f095cdcf351ceb6ae87c'
    },
    {
      name: 'DepthTestMode',
      brief: 'Values for Idx_DepthTestMode',
    ref: 'struct_meta___image_marker_style.html#1a7ef830acb4d5799d31af2e34d418c07a'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___image_marker_style.html#1a882fa4d2e690ff21e63fe8a6f24dfec9'
    },
    {
      name: 'AddIgnoreProbes',
      brief: '',
    ref: 'struct_meta___image_marker_style.html#1aa8a010690fee32173b82aff583116901'
    },
    {
      name: 'RemoveHitTestRadius',
      brief: '',
    ref: 'struct_meta___image_marker_style.html#1addd390c481685a0e8adde1e73eeb3506'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___image_panel.html#1a0f18416c9aec5d8d7f0878f922d63c3e'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___index_prim.html#1a8916fe2ba8b7be6b8f26c3ea7797584a'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___key_code_guard.html#1a5aae79ba35e2c26ed6a31d6b8731dc22'
    },
    {
      name: 'SpecialKey',
      brief: 'Special values for KeyCode',
    ref: 'struct_meta___key_code_guard.html#1a9d085faf4146fe9992bce4d503145d5e'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___key_state_guard.html#1abf74c6144e94a5c76aa0973f1bde57ac'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___l_o_d.html#1a51f681a9cbdb7ca6be6b07cd9ba9088b'
    },
    {
      name: 'IDX',
      brief: '',
    ref: 'struct_meta___label.html#1a3e4ceeb8f1b11f33c68112531344bcd5'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___library.html#1adc1670deabe9e35edd6448c54437212f'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___light.html#1a4b687828657dca01fbc353a888f708f9'
    },
    {
      name: 'LIGHTTYPE',
      brief: 'Values for Idx_Type',
    ref: 'struct_meta___light.html#1a704c8022d3a906228bb2ad2f99ae99e8'
    },
    {
      name: 'UpdateMode',
      brief: 'Values for Idx_UpdateMode',
    ref: 'struct_meta___light_probe.html#1a35f81b851c21c10aa1ad799f811ac8a6'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___light_probe.html#1a38073b835edff41c8e8e68acc889b290'
    },
    {
      name: 'ProbeMode',
      brief: 'Values for Idx_Mode',
    ref: 'struct_meta___light_probe.html#1a3edef45e68f37a00a7c338e5a96bf6cd'
    },
    {
      name: 'ProxyType',
      brief: 'Values for Idx_ProxyType',
    ref: 'struct_meta___light_probe.html#1af500076caaff444e157632df3208599e'
    },
    {
      name: 'Axis',
      brief: 'Values for Idx_Axis and Idx_UpAxis',
    ref: 'struct_meta___look_at.html#1a009e0649bca1b16f84921a2207410c10'
    },
    {
      name: 'IDX',
      brief: 'Property Index',
    ref: 'struct_meta___look_at.html#1a51daeea875e262d0dffc76572ef5a2f4'
    },
    {
      name: 'IDX',
      brief: 'Property Index',
    ref: 'struct_meta___look_at_target.html#1a3352d416488006af3fc75fa00f12e097'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___marker.html#1a402c510505432805fc39114b1de6eefa'
    },
    {
      name: 'AutoSelectMode',
      brief: 'Values for Idx_AutoSelect',
    ref: 'struct_meta___marker.html#1a68d83c63f17ac1b2ccdb1a8d6b70b843'
    },
    {
      name: 'SnapTo',
      brief: 'Values for Idx_SnapTo',
    ref: 'struct_meta___marker.html#1ad2464b41047ab8b93bd0b00922f61ea1'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___material_argument.html#1a96acef85cd055377e25b9fa4907f78d2'
    },
    {
      name: 'Source',
      brief: 'Values for Idx_Source',
    ref: 'struct_meta___material_argument.html#1af043188a0116c21a78552df9409dfead'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___material_parameter.html#1a3528619fb9096ac978efb30d632c82a6'
    },
    {
      name: 'Type',
      brief: 'Values for Idx_Type',
    ref: 'struct_meta___material_parameter.html#1a46f0482997a37a873feda88d5b6e8dde'
    },
    {
      name: 'IDX',
      brief: 'Selecting an item in the list applies the material to the selection in the specified selection group',
    ref: 'struct_meta___material_selector.html#1a603e51fe06df8bbb746af7c3632aa949'
    },
    {
      name: '@7',
      brief: 'Property index',
    ref: 'struct_meta___measuring_point.html#1aebfb9768e11890158f8f2095d9420758'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___mesh.html#1a08a08d9a84731252cf5d6b0e8a90a4c8'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___meta_data_bool.html#1a2041df6a68493f72bd10d90d99c38378'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___meta_data_colour.html#1a5b6b0b8f60165c158d272be142fc958f'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___meta_data_double3.html#1aa093543f008c1527778573abdaf281d5'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___meta_data_double4.html#1af65bb474a0209649262d81b54acc49fc'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___meta_data_double.html#1acbdadc27b27a98114659e9f827385a59'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___meta_data_float2.html#1ad98ff587ede15cc751eb2461251700df'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___meta_data_float3.html#1a98563d0fce48e62f55dc4a469af30292'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___meta_data_float4.html#1a3cef8058237d71917daf10f459b7faed'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___meta_data_float.html#1a683f1365e48f4a7e319b1b48c508c107'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___meta_data_int2.html#1a4a07629fc08b7ddf162dabbd75f26c16'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___meta_data_int.html#1a15e07a8a7e89efb945943e2220476fde'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___meta_data_link.html#1ac1eb4fef9721053121e540cc79afaf01'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___meta_data_property_mask.html#1a8898579d5ea8d9ff52244a8eab2a99af'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___meta_data_string.html#1a7dcb515c07c248155457fae81f504b23'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___meta_node.html#1a69bf833fce9dc2d50bef57017805788b'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___meta_value.html#1a846bcd77441bb239ab0a935f8dd26b0a'
    },
    {
      name: 'AlignMode',
      brief: 'Values for Idx_AlignMode',
    ref: 'struct_meta___model_marker_style.html#1a244ac61ae6ee94ae6b7a57086ec2e341'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___model_marker_style.html#1a459b79179ba9983c70de364ecbdf119b'
    },
    {
      name: 'SizeMode',
      brief: 'Values for Idx_SizeMode',
    ref: 'struct_meta___model_marker_style.html#1a8772f67b286c28416948a12d4c325773'
    },
    {
      name: 'DepthTestMode',
      brief: 'Values for Idx_DepthTestMode',
    ref: 'struct_meta___model_marker_style.html#1a87fe507f36bf2571bc8f4365f80ce669'
    },
    {
      name: 'HitTestMode',
      brief: 'Values for Idx_HitTestMode',
    ref: 'struct_meta___model_marker_style.html#1afd172eeb5050f61232030ed01f09cc11'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___movie.html#1a6e465e5fe99fdd60aeae25e2c182584c'
    },
    {
      name: 'ColourSpace',
      brief: 'Values for Idx_ColourSpace',
    ref: 'struct_meta___movie.html#1afcdd8f827dd4fc4cc9552f15885cf958'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___net_player_texture.html#1a088cd717534ee8670eb461974bf91a94'
    },
    {
      name: 'State',
      brief: 'Values for Idx_State',
    ref: 'struct_meta___net_player_texture.html#1ace20f9e1ad445b8b2042584f7684a13a'
    },
    {
      name: 'IDX',
      brief: 'Property Index',
    ref: 'struct_meta___node_selector.html#1a5aa9d2da84f569639612d1dbbb7d07d6'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___ocean.html#1af2825b83dc363ce5c81c03408d0473f1'
    },
    {
      name: 'IDX',
      brief: '',
    ref: 'struct_meta___ocean_rotor_wash.html#1a25ceed876fd59a710c7167a8c670943d'
    },
    {
      name: 'IDX',
      brief: '',
    ref: 'struct_meta___ocean_wake.html#1a0dd78ab2c539fd10e64aad02f1a11243'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___oculus_viewport.html#1a2d16c4b0325aa1eeff3a9d57d048c4cc'
    },
    {
      name: '@9',
      brief: '',
    ref: 'struct_meta___op_progress.html#1ae30d8ca21557c878a95829cc63cf8b46'
    },
    {
      name: '@10',
      brief: '',
    ref: 'struct_meta___op_progress_yield.html#1a4ab9821bf397f433a485437867321cb2'
    },
    {
      name: 'IDX',
      brief: '',
    ref: 'struct_meta___open_v_r_viewport.html#1ad4d8eefbdf6e4928dd0949b6307ef9e3'
    },
    {
      name: 'IDX',
      brief: '',
    ref: 'struct_meta___open_x_r_viewport.html#1a88b3c9f4656235f89ca4445ed20bb287'
    },
    {
      name: 'SizingMode',
      brief: 'Values for Idx_SizingMode properties on most panel-like controls Meta_Stack, Meta_Button, etc) ',
    ref: 'struct_meta___panel.html#1a25c981816ec930024fad24048b92c192'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___panel.html#1a3137243ad98c2297d4bfb4b236204643'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___particle_system.html#1a0742049384231995e5c55a2f7667b9ce'
    },
    {
      name: 'ScaleMode',
      brief: 'Values for Idx_ScaleMode',
    ref: 'struct_meta___particle_system.html#1a173bae0056f31da9ed2dfaa98e413d32'
    },
    {
      name: 'BurstDataTypes',
      brief: '',
    ref: 'struct_meta___particle_system.html#1a3302f2f4d7f3218237263034aaa98e2d'
    },
    {
      name: 'EmitShape',
      brief: 'Values for Idx_EmitShape',
    ref: 'struct_meta___particle_system.html#1a8c1e7f361145235ee1ce63ba2272a584'
    },
    {
      name: 'BillboardMode',
      brief: 'Values for Idx_BillboardMode',
    ref: 'struct_meta___particle_system.html#1ab2056910e9814ff88ac46d9ca9545239'
    },
    {
      name: 'BlendMode',
      brief: 'Values for Idx_BlendMode',
    ref: 'struct_meta___particle_system.html#1ab8858546931328d56911e83c6c739549'
    },
    {
      name: 'TilingMode',
      brief: 'Values for Idx_TilingMode',
    ref: 'struct_meta___particle_system.html#1ad8c85706cd8339ad2bb8d43a98877762'
    },
    {
      name: 'ParticleInputType',
      brief: 'Values for InputType properties',
    ref: 'struct_meta___particle_system.html#1aed5d5ea56597d33b74ba3aee9afb05ad'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___permission.html#1ac5f19babacccbf897117bbe689a81eb8'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___physical_screen.html#1a511ee842ea5d6485856f35de0c7538a9'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___pivot.html#1aeadc48fcd37ca1dd838b76e2a8e35b4c'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___point_cloud.html#1aaeeb56e29573ba7a4e487bf9558b10bc'
    },
    {
      name: 'Hand',
      brief: 'Values for Idx_Hand',
    ref: 'struct_meta___pointer_controller.html#1a0923cdda53bb08bdf9a7d724e0a3f144'
    },
    {
      name: 'IDX',
      brief: '',
    ref: 'struct_meta___pointer_controller.html#1af5e18be30ca640ebcf71bbf24dcb9fc2'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___pose_guard.html#1add8cd83a2e7c158f3b5b87876fe3f38d'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___pose_state_guard.html#1a1f9c4ac7e21d71cbc79a7cfe609abd7d'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___precision.html#1a157c6678b24cfb129c20f0fb1fefc920'
    },
    {
      name: 'Dir',
      brief: 'Represents a path to a directory',
    ref: 'struct_meta___prop_semantics_1_1_prop_type.html#1a00fd56a72af15119f484daafbca238fc'
    },
    {
      name: '_2DMatrix',
      brief: 'Represents a 2d matrix ',
    ref: 'struct_meta___prop_semantics_1_1_prop_type.html#1a1ae4ed4e30e98750d5fdaeb8ea49ed54'
    },
    {
      name: 'Stream',
      brief: 'Represents a file path that doesn\'t have to exist on disk',
    ref: 'struct_meta___prop_semantics_1_1_prop_type.html#1a1dfbbf2d115aab2a60d9eb1e7f3cbd96'
    },
    {
      name: 'FileList',
      brief: 'Represents a path to a file drop down with a file select button',
    ref: 'struct_meta___prop_semantics_1_1_prop_type.html#1a1fe87209fdbec089110c6df33c1a391d'
    },
    {
      name: 'Rect',
      brief: 'Represents a rectangle instead of a regular vec4 ',
    ref: 'struct_meta___prop_semantics_1_1_prop_type.html#1a305b61c9a23adea8db00a6fd087fbe11'
    },
    {
      name: 'FileSave',
      brief: 'Represents a path to save a file',
    ref: 'struct_meta___prop_semantics_1_1_prop_type.html#1a3187e80e7e8514a0d475a903e363716b'
    },
    {
      name: 'CollisionGroupMask',
      brief: 'Represents a collision mask',
    ref: 'struct_meta___prop_semantics_1_1_prop_type.html#1a561c0300a830a9190e6cf0785f5b647b'
    },
    {
      name: 'File',
      brief: 'Represents a path to a file to open',
    ref: 'struct_meta___prop_semantics_1_1_prop_type.html#1a57b82a6208a00c65957155ad3a82deb4'
    },
    {
      name: 'Attribute',
      brief: 'Represents a property\'s attribute',
    ref: 'struct_meta___prop_semantics_1_1_prop_type.html#1a6816281cf031e7dfe44475ae5a919999'
    },
    {
      name: 'Custom',
      brief: 'Represents a custom type ',
    ref: 'struct_meta___prop_semantics_1_1_prop_type.html#1a75f352ca3d1d2ba3c7fd19d5be393b1b'
    },
    {
      name: 'SingleLineText',
      brief: 'Represents a single-line text edit',
    ref: 'struct_meta___prop_semantics_1_1_prop_type.html#1a82dad81556894a96408343e80fb59e02'
    },
    {
      name: 'RestrictedFileList',
      brief: 'Represents a path to a file drop down',
    ref: 'struct_meta___prop_semantics_1_1_prop_type.html#1a86d4394a35afe311af67d91f94f07baf'
    },
    {
      name: 'Colour',
      brief: 'Represents a colour as opposed to a regular vec3 or vec4',
    ref: 'struct_meta___prop_semantics_1_1_prop_type.html#1a96e343f1ad3c81fc4a7641fd6f093eb6'
    },
    {
      name: 'Password',
      brief: 'Repesents a password text edit that obscures its contents',
    ref: 'struct_meta___prop_semantics_1_1_prop_type.html#1a9854b465703a0d90c8ea1f11d9ab8448'
    },
    {
      name: 'Slider',
      brief: 'Represents a slider control instead of a regular number editor',
    ref: 'struct_meta___prop_semantics_1_1_prop_type.html#1a996df75b822fadc6eaba1e8295f1175f'
    },
    {
      name: 'CompositeControl',
      brief: 'Represents a composite control formed of multiple items',
    ref: 'struct_meta___prop_semantics_1_1_prop_type.html#1a9d44d7c0410293565ca748b28fee2d3f'
    },
    {
      name: 'Property',
      brief: 'Represents a property',
    ref: 'struct_meta___prop_semantics_1_1_prop_type.html#1ab0632bf1f11e9df769e359360530e780'
    },
    {
      name: 'Image',
      brief: 'Represents a path to an image file ',
    ref: 'struct_meta___prop_semantics_1_1_prop_type.html#1abdd9090a2b920a6eddc90e68d0459fc8'
    },
    {
      name: 'ToggleButton',
      brief: 'Represents a toggle button control for bool values instead of a checkbox',
    ref: 'struct_meta___prop_semantics_1_1_prop_type.html#1ac221bf865426d72284407feb0291ce7c'
    },
    {
      name: 'LogSlider',
      brief: 'Represents a slider control with a logarithmic scale ',
    ref: 'struct_meta___prop_semantics_1_1_prop_type.html#1ac520cc38565f1269ba4d145540fb4c82'
    },
    {
      name: 'None',
      brief: 'No special type',
    ref: 'struct_meta___prop_semantics_1_1_prop_type.html#1acb8ce1a1ea206d84cda29f45dc21f370'
    },
    {
      name: 'RawMatrix',
      brief: 'Represents a raw matrix ',
    ref: 'struct_meta___prop_semantics_1_1_prop_type.html#1ad4998ecc788edb5b3459ecb784f5e2eb'
    },
    {
      name: 'Font',
      brief: 'Represents a font',
    ref: 'struct_meta___prop_semantics_1_1_prop_type.html#1adc69e5060a04eec49dbb8034dbca193b'
    },
    {
      name: 'GLSLSourceCode',
      brief: 'Represents a string containing GLSL source code',
    ref: 'struct_meta___prop_semantics_1_1_prop_type.html#1ae47e314da55109d4b24457b42e801b16'
    },
    {
      name: 'LUASourceCode',
      brief: 'Represents a string containing LUA source code',
    ref: 'struct_meta___prop_semantics_1_1_prop_type.html#1ae82074f2b8c7f6b4dc451d1cd2d4c15a'
    },
    {
      name: 'Log2Slider',
      brief: 'Represents a slider control with a logarithmic scale ',
    ref: 'struct_meta___prop_semantics_1_1_prop_type.html#1af9c2d26a56aabfa3a6ef66e8e1fd17fd'
    },
    {
      name: 'Sphere',
      brief: 'Represents a sphere instead of a regular vec4 ',
    ref: 'struct_meta___prop_semantics_1_1_prop_type.html#1afe345a6dfed3ae9502632aa9c3865852'
    },
    {
      name: 'minVal',
      brief: 'casts the minimum value to vector type C<T> and returns it ',
    ref: 'struct_meta___prop_semantics_1_1_range.html#1a102c56aa5e027cbebc5e8f965ba6a4f1'
    },
    {
      name: 'd8',
      brief: '',
    ref: 'struct_meta___prop_semantics_1_1_range.html#1a13f3c24d4ae757254f4c9b68c348e14c'
    },
    {
      name: 'Range',
      brief: '',
    ref: 'struct_meta___prop_semantics_1_1_range.html#1a230cc52f44c2dd462dd7908117c9f3a4'
    },
    {
      name: 'Range',
      brief: '',
    ref: 'struct_meta___prop_semantics_1_1_range.html#1a406284df7fb7205167347bcc5465cb6d'
    },
    {
      name: 'Range',
      brief: '',
    ref: 'struct_meta___prop_semantics_1_1_range.html#1a46038895434c354f553d9686968c9f43'
    },
    {
      name: 'maxVal',
      brief: 'casts the maximum value to vector type C<T> and returns it',
    ref: 'struct_meta___prop_semantics_1_1_range.html#1a6fbc417c3b96aa9ee82865b857ef7522'
    },
    {
      name: 'Range',
      brief: '',
    ref: 'struct_meta___prop_semantics_1_1_range.html#1a778b5fce6d567e69900fafb362533ffa'
    },
    {
      name: 'minVal',
      brief: 'casts the single minimum value to T and returns it ',
    ref: 'struct_meta___prop_semantics_1_1_range.html#1a7925edc4703cfcf5595a26012cfe354a'
    },
    {
      name: 'Range',
      brief: '',
    ref: 'struct_meta___prop_semantics_1_1_range.html#1ab1394ec397f1d35b1bf2ffa1b12a9059'
    },
    {
      name: 'operator double *',
      brief: '',
    ref: 'struct_meta___prop_semantics_1_1_range.html#1ab4b87f84d398bfb4fee32e51126ceb06'
    },
    {
      name: 'maxVal',
      brief: 'casts the single maximum value to T and returns it ',
    ref: 'struct_meta___prop_semantics_1_1_range.html#1ac99365be4a3d0cb8141fe855202c99c6'
    },
    {
      name: '@11',
      brief: '',
    ref: 'struct_meta___prop_semantics.html#1a53338b0481aeb22498ce8f41f0fac14b'
    },
    {
      name: '@12',
      brief: '',
    ref: 'struct_meta___prop_semantics_link.html#1a896ef159e1800312f5e12fbd331cd4da'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___property_track.html#1a4b13f440ca745b1f21b63f6124bb4e55'
    },
    {
      name: 'IDX',
      brief: '',
    ref: 'struct_meta___r_s_blend.html#1a0712fd53df3a95822008bb90647b7eeb'
    },
    {
      name: 'Meta_RSBlend',
      brief: '',
    ref: 'struct_meta___r_s_blend.html#1a552ac03085c1ba93a753dea738eadd88'
    },
    {
      name: 'UpdateMode',
      brief: 'Values for Idx_UpdateMode',
    ref: 'struct_meta___reflection_probe.html#1a5f4d9ea7c257d48377f820b4610ad195'
    },
    {
      name: 'ProxyType',
      brief: 'Values for Idx_ProxyType',
    ref: 'struct_meta___reflection_probe.html#1a66447e402c7a901070cd0f6ef5421edd'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___reflection_probe.html#1acb8cc56b9ac787d2371dc99599e2bd3f'
    },
    {
      name: 'ProbeMode',
      brief: 'Values for Idx_Mode',
    ref: 'struct_meta___reflection_probe.html#1ae17558cfd6e53336193894bfe21d0895'
    },
    {
      name: 'IDX',
      brief: '',
    ref: 'struct_meta___render_target.html#1a3a572035fae09f675c3e7a8abca40ba2'
    },
    {
      name: 'Attachment',
      brief: '',
    ref: 'struct_meta___render_target.html#1a76e3ba94625c234454155878460d6ea1'
    },
    {
      name: 'Meta_RenderTarget',
      brief: '',
    ref: 'struct_meta___render_target.html#1a82edacbaf82f6987a806cd051941fbe9'
    },
    {
      name: 'CubeMapFace',
      brief: '',
    ref: 'struct_meta___render_target.html#1a8edda46592cb5e04efc5813b416a63cc'
    },
    {
      name: 'Format',
      brief: 'Values for Idx_TextureFormat',
    ref: 'struct_meta___render_to_texture.html#1a2f78509fba6661b1a4953c5db2399df7'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___render_to_texture.html#1abd85101d9ffe8035603b91272159e47a'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___rollout_stack.html#1abf30e1679a10c2c58e9c9c069cfef8a0'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___scene_l_o_d.html#1a3f22f249037cdd2fff34ac54ddd19948'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___scene_link.html#1a9b9b61ad4e39bdbc7d8295018004a787'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___scene_list.html#1af997c0c5728f1409f3008d88cf9cc929'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___scroll_bar.html#1a199b41a92efac33c0071203d9eeb5a0b'
    },
    {
      name: 'SliderType',
      brief: 'Types for Idx_Type',
    ref: 'struct_meta___scroll_bar.html#1a8d2f903f32034bf01ca048cf7a7bc481'
    },
    {
      name: 'IDX',
      brief: '',
    ref: 'struct_meta___scroll_bar_style.html#1ad6d568c57ab20db49ded02cdc1468e75'
    },
    {
      name: 'ScrollDirection',
      brief: 'Values for Idx_ScrollDirection',
    ref: 'struct_meta___scrolling_stack.html#1a468fe9600c04721017d5c22a7dbfdb4f'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___scrolling_stack.html#1aaab5ff7483db320126d80194e362c175'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___scrolling_stack_style.html#1ad89df070431b92515a73b266e560c59c'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___separator.html#1a17f556ea8f3993eb81e2fc2ce2f548c3'
    },
    {
      name: 'SeparatorType',
      brief: 'Values for Idx_Type',
    ref: 'struct_meta___separator.html#1aab3634768a9198b295e9ebec5d207288'
    },
    {
      name: 'InitialState',
      brief: 'Values for Idx_InitialState',
    ref: 'struct_meta___sequence.html#1a4feb572cbfe5c756952131645120f85b'
    },
    {
      name: 'PlayMode',
      brief: 'Values for Idx_PlayMode',
    ref: 'struct_meta___sequence.html#1a59091c1ac5f38f36928758c8c310e98c'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___sequence.html#1a6011bf9994b287968ed357a1a7cfbe9f'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___sequence_track.html#1aca583c3268078e6e75357af295013a31'
    },
    {
      name: 'IDX',
      brief: '',
    ref: 'struct_meta___shader_sampler.html#1a5293759dfde772b4a3de9031d64680ef'
    },
    {
      name: 'Meta_ShaderSampler',
      brief: '',
    ref: 'struct_meta___shader_sampler.html#1a566635ecade8ae3af61e0a8634b42766'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___shadow_bounds_override.html#1a93775834a1be0c2e65985d419ed187fe'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___simulation_terrain.html#1ade9f6987d1e269375c6fb81e23520d70'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___slider.html#1ac4c5c70fc57ec7e67c1bd39d7b3c41e1'
    },
    {
      name: 'SliderType',
      brief: 'Values for Idx_Type',
    ref: 'struct_meta___slider.html#1ada4a55ad978b9e2486bfe785323b3266'
    },
    {
      name: 'DepthTestMode',
      brief: 'Values for Idx_DepthTestMode',
    ref: 'struct_meta___spherical_marker_style.html#1a9c9cc18d89a3d9b361131ee16327d8bd'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___spherical_marker_style.html#1aae611351a46545e8c5d4ecd7fa329377'
    },
    {
      name: 'SizeMode',
      brief: 'Values for Idx_SizeMode',
    ref: 'struct_meta___spherical_marker_style.html#1ae71b77a48c1105846992eb6531b80a89'
    },
    {
      name: 'VAlign',
      brief: 'Values for Idx_VAlign',
    ref: 'struct_meta___stack.html#1a115af504fe010bc6f36da54a6803967b'
    },
    {
      name: 'Direction',
      brief: 'Values for Idx_Direction',
    ref: 'struct_meta___stack.html#1a4831fb75d9711422f7d9bbe7c5b55d66'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___stack.html#1aa2654a03de97549199b8660f31fe7e2d'
    },
    {
      name: 'HAlign',
      brief: 'Values for Idx_HAlign',
    ref: 'struct_meta___stack.html#1aa8bdc021b15a3ee1a76c3fb20825854f'
    },
    {
      name: 'LinePatterns',
      brief: 'Values for Idx_LinePattern',
    ref: 'struct_meta___std_material.html#1a229d0ed003fa4e273cfc4809ca6f8655'
    },
    {
      name: 'BlendMode',
      brief: 'Values for Idx_BlendMode',
    ref: 'struct_meta___std_material.html#1a4e8358b24cb0896404fbd8f447ba595f'
    },
    {
      name: 'TextureChannels',
      brief: '',
    ref: 'struct_meta___std_material.html#1a5e0bd18c7fec398ed857d83463932cc3'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___std_material.html#1a983281ba9b2ca911221377923fc6377d'
    },
    {
      name: '@2',
      brief: '',
    ref: 'struct_meta___surface_shader_definition.html#1a33d05ce223da2c531ea563a9ca0df301'
    },
    {
      name: 'IDX',
      brief: '',
    ref: 'struct_meta___surface_shader_definition.html#1a8021dd5d190b83c8cfaf3a44d26be3bb'
    },
    {
      name: 'Meta_SurfaceShaderDefinition',
      brief: '',
    ref: 'struct_meta___surface_shader_definition.html#1ae5d2e1f03655905a3a2fdec157beb80b'
    },
    {
      name: 'Meta_SurfaceShaderInstance',
      brief: '',
    ref: 'struct_meta___surface_shader_instance.html#1a2a88758a8b7045bacff38fa39cdd0359'
    },
    {
      name: 'IDX',
      brief: '',
    ref: 'struct_meta___surface_shader_instance.html#1abc1b604b0d3509db704894bdc16daf56'
    },
    {
      name: '@3',
      brief: '',
    ref: 'struct_meta___surface_shader_instance.html#1aeef90b76aaefadcf3b55544869662861'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___system_collision.html#1a751e0798eb5296467dbc6c1edc752ec6'
    },
    {
      name: 'IDX',
      brief: '',
    ref: 'struct_meta___text_box.html#1ab3e5e60994053e093144dd326c27a4a1'
    },
    {
      name: 'Minify',
      brief: 'Values for Idx_Minify',
    ref: 'struct_meta___texture.html#1a404158e8bfc94c82cfe9681987f35aef'
    },
    {
      name: 'ColourSpace',
      brief: 'Values for Idx_ColourSpace',
    ref: 'struct_meta___texture.html#1a6409d84d70d7d2d8c862117e813bce38'
    },
    {
      name: 'Wrap',
      brief: 'Values for Idx_WrapU and Idx_WrapV',
    ref: 'struct_meta___texture.html#1a6b3ee6acc996398ed1112b5502d1cac8'
    },
    {
      name: 'Content',
      brief: 'Values for Idx_Content',
    ref: 'struct_meta___texture.html#1a75391ce71159ca6c25f8f4dde397a626'
    },
    {
      name: 'Magnify',
      brief: 'Values for Idx_Magnify',
    ref: 'struct_meta___texture.html#1a8dff1d38a3466190ffa1e771eba027f5'
    },
    {
      name: 'Encoding',
      brief: 'Values for Idx_Encoding',
    ref: 'struct_meta___texture.html#1aa0ced3677f47c2277ae6398ec660ec6a'
    },
    {
      name: 'IDX',
      brief: '',
    ref: 'struct_meta___texture.html#1af65247cedb504ef12687a19922dc8717'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___textured_button_style.html#1a9a71e72fcd578581d83825608ebc0716'
    },
    {
      name: 'ImagePosition',
      brief: 'Values for Idx_ImagePosition',
    ref: 'struct_meta___textured_button_style.html#1aebba3081dcaada02c69c9cce52ebcd86'
    },
    {
      name: 'IDX',
      brief: '',
    ref: 'struct_meta___textured_label_style.html#1ac8c85093b872ad3c76543a9455b8e649'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___textured_panel_style.html#1a92ee11cad6db0c33da37cece50921177'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___time_interval_guard.html#1a56b633dfe44124427408154735b5da74'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___tracked_a_r_marker.html#1a2eb414f1d89993fb39cbdbe115776eff'
    },
    {
      name: 'Type',
      brief: '',
    ref: 'struct_meta___tracked_a_r_marker.html#1aadf6d01ba0c28a2cb5ed7837d3209c5c'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___tracker_input.html#1a08bb3d94bc31e27a7b22b6d0d891eb58'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___tracker_output.html#1acb0b01b5f8bd195a8411c0471a3f013c'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___tracker_p_r_s_link.html#1a26d64c200fbe407b533f0bb51f82bcd8'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___transform.html#1ae9bb00c39bb4f3041b73641fc33b7980'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___transform_limits.html#1a8aae02736baed84e1bbb2427879f18e9'
    },
    {
      name: 'OverrideMode',
      brief: 'Values for Idx_OverrideMode',
    ref: 'struct_meta___transform_link.html#1a47946709daeea394cafd3ea4b17ce205'
    },
    {
      name: 'Idx',
      brief: 'Property index',
    ref: 'struct_meta___transform_link.html#1a4b17f08bfec43c032b7a91e19009919f'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___tree_view_item.html#1a5d01444df1209277b733271b412f8b68'
    },
    {
      name: 'ExpandedState',
      brief: 'Values for Idx_Expanded',
    ref: 'struct_meta___tree_view_item.html#1a78b9b089e09f2984dc7097503007ea08'
    },
    {
      name: 'IDX',
      brief: 'Property Index',
    ref: 'struct_meta___typeface.html#1a69a56e30ce07fd9f09f3c4cc55e37821'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___untargetted_viewport.html#1a1130eca5645bdadf2af6595aa84984be'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___user.html#1a8ef9db4327b7b95d9b905e216eb24eba'
    },
    {
      name: 'ReadWriteFlags',
      brief: 'Flags for NetRWFlags',
    ref: 'struct_meta___user.html#1af19c8bf9445cce160bbe7ce5c54dd80e'
    },
    {
      name: 'Meta_UserLink',
      brief: '',
    ref: 'struct_meta___user_link.html#1ae26d35a5418fb86e0b44234cb758a1a0'
    },
    {
      name: '@1',
      brief: '',
    ref: 'struct_meta___user_link.html#1af0d21405ffc5ee062175c5d5a6ed4d56'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___vertex_attrib.html#1aa5944594fc24419d079aed149b2978b9'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___vertex_prim.html#1a0921bbf26cafced99b86a4e602481ef6'
    },
    {
      name: 'Meta_View',
      brief: '',
    ref: 'struct_meta___view.html#1a74b8ede672d274c3aab7e903869dbef0'
    },
    {
      name: 'IDX',
      brief: '',
    ref: 'struct_meta___view.html#1aff52f3551f44274451d00346bab8260a'
    },
    {
      name: 'BlendMode',
      brief: 'Values for Idx_BlendMode',
    ref: 'struct_meta___view_filter.html#1a870ce0b2982d0f415036268a3954840d'
    },
    {
      name: 'IDX',
      brief: '',
    ref: 'struct_meta___view_filter.html#1af62cc8462b711cb7dac25da452652295'
    },
    {
      name: 'StereoMode',
      brief: 'Values for Idx_StereoMode',
    ref: 'struct_meta___view_shader.html#1a05c5ff25b04b6051b0f39d9d761fe4c8'
    },
    {
      name: 'IDX',
      brief: 'Property Index',
    ref: 'struct_meta___view_shader.html#1af182cd659de772314d142bfdd2f38c8a'
    },
    {
      name: 'Target',
      brief: 'Values for Idx_Target',
    ref: 'struct_meta___view_shader.html#1afe3d8404df7e0290d4cfbd1e8079c7bc'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___viewpoint.html#1aa206779b05743b2d0ce10f6ed077c017'
    },
    {
      name: 'IDX',
      brief: 'Property Index',
    ref: 'struct_meta___viewpoint_selector.html#1a0e6839feb50ae9306e0f0705f2abbf73'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___viewport.html#1a4c96f0c7a88cf94a83091f0674bd176c'
    },
    {
      name: 'EyeOverride',
      brief: 'Values for Idx_EyeOverride',
    ref: 'struct_meta___viewport.html#1ad09abe598197bb626f69a760998874e5'
    },
    {
      name: 'ProjectionMode',
      brief: 'Values for Idx_ProjectionMode',
    ref: 'struct_meta___viewport.html#1af44bf60e9071523a5c4b7199850f18f5'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___viewport_layout.html#1a8d304b5c97dbe0c358f072f4c79aa7db'
    },
    {
      name: 'ShadowCaster',
      brief: 'Values for Idx_ShadowCaster',
    ref: 'struct_meta___visual.html#1a6a990c1ad5df5a4e98d3d42698a27905'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___visual.html#1ab1e11004b8577fa6126ba9504692b24a'
    },
    {
      name: 'CullFace',
      brief: 'Values for Idx_CullFace',
    ref: 'struct_meta___visual.html#1ac5695f85fdc84b665a52cdc52dca7d7b'
    },
    {
      name: 'DrawMode',
      brief: 'Values for Idx_DrawMode',
    ref: 'struct_meta___visual.html#1afc9bca1c878ac080026dec4554130039'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___water_material.html#1a7781059e054b5102ac3ec259bcf45223'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___window.html#1a268594f6433291a3752d7405a31a45c3'
    },
    {
      name: 'IDX',
      brief: 'Property index',
    ref: 'struct_meta___z_space_viewport.html#1a8944d4eff607b323995b9381b5a15f37'
    },
    {
      name: 'DEFINE_TRAIT_RESOURCES',
      brief: '',
    ref: 'struct_trait___abstract_trait.html#1a2cb4ea4cab940f60dc9ae83acdbb681c'
    },
    {
      name: 'diagonal',
      brief: 'DEPRECATED since version 2vrbox instead',
    ref: 'structvrbox.html#1a0d7cd249c183eac2d4ce9acad11693e5'
    },
    {
      name: 'intersects',
      brief: 'vrTestIntersection) Returns whether or not two objects are intersecting one another',
    ref: 'structvrbox.html#1a275c57c15cec91bed0ac9b267ed0e947'
    },
    {
      name: 'contains',
      brief: 'vrTestContain) Returns whether or object A completly contains object B',
    ref: 'structvrbox.html#1a305f9e8c1b06710db83b9930d0735091'
    },
    {
      name: 'extent',
      brief: 'DEPRECATED since version 2getExtent instead',
    ref: 'structvrbox.html#1a3ad942de5ce89f59dfe2266821a5dac8'
    },
    {
      name: 'merge',
      brief: 'vrAABoxMerge) Returns an axis aligned bounding box that contains two other bounding boxes',
    ref: 'structvrbox.html#1a65c365584f5795a29865e9e7c9f92c3f'
    },
    {
      name: 'centre',
      brief: 'Centre of the box',
    ref: 'structvrbox.html#1a70d45bfe2ba723152befcd4b6b6a4488'
    },
    {
      name: 'copy',
      brief: 'vrCopy) Returns a copy of a Vector, Matrix, Ray, Sphere, AABBox, Quaternion or Plane ',
    ref: 'structvrbox.html#1a94d3aac17d403356555b1611548eefca'
    },
    {
      name: 'getExtent',
      brief: 'vrAABoxExtent) Returns the largest dimension of an axis aligned bounding box',
    ref: 'structvrbox.html#1a9a0f1f971b9c506ca55d76b337bba76a'
    },
    {
      name: 'operator=',
      brief: '',
    ref: 'structvrbox.html#1aa41478968efff1dace54746b06578252'
    },
    {
      name: 'min',
      brief: 'Minimum in each axis of the box',
    ref: 'structvrbox.html#1ab02043e78833a5e4a8dfd42df420906e'
    },
    {
      name: 'center',
      brief: 'Centre of the box',
    ref: 'structvrbox.html#1ac024f753bd7964e5b3787692d3252a6a'
    },
    {
      name: 'transform',
      brief: 'vrAABoxTransform) Returns an axis aligned bounding box transformed by a matrix',
    ref: 'structvrbox.html#1ace871b6c3a5a6d20aad359c1ae9fd30b'
    },
    {
      name: 'dimensions',
      brief: 'Dimensions of the box',
    ref: 'structvrbox.html#1ae2291989395349631110e755b712caba'
    },
    {
      name: 'max',
      brief: 'Maximum in each axis of the box',
    ref: 'structvrbox.html#1af6143c24a4baec4f689fe0314d0d1813'
    },
    {
      name: 'operator*',
      brief: '',
    ref: 'structvrmatrix3.html#1a0301d831bc03ee62871175fa63b866f2'
    },
    {
      name: 'determinant',
      brief: 'vrMatDeterminant) Returns the determinant of the matrix ',
    ref: 'structvrmatrix3.html#1a0a77186f2b9422bf3b6405f2ef746c4d'
    },
    {
      name: 'rotateY',
      brief: 'vrMatRotateEulerY) Return M rotated on the Y axis by angle V',
    ref: 'structvrmatrix3.html#1a0c9624179e8497d487c4ed802a5853ea'
    },
    {
      name: 'e01',
      brief: 'DEPRECATED since version 2vrmatrix3:get',
    ref: 'structvrmatrix3.html#1a16f0624b2cf8c94ae007e02bb9927241'
    },
    {
      name: 'normalise',
      brief: 'vrNormalise) Returns normalised vector/matrix',
    ref: 'structvrmatrix3.html#1a1a61111a932947ec036c3a3b017f09cb'
    },
    {
      name: 'operator/',
      brief: '',
    ref: 'structvrmatrix3.html#1a1ed83abc3ff2d8e8eafb15d7dbc10c99'
    },
    {
      name: 'transpose',
      brief: 'DEPRECATED since version 2getTranspose instead',
    ref: 'structvrmatrix3.html#1a20df51a5c2dd0c4afff7b05713b3eab0'
    },
    {
      name: 'rotateX',
      brief: 'vrMatRotateEulerX) Return M rotated on the X axis by angle V',
    ref: 'structvrmatrix3.html#1a230ab2ce01bcf2b3fbd3b83459c49174'
    },
    {
      name: 'up',
      brief: 'Up vector',
    ref: 'structvrmatrix3.html#1a24437499755f589c5d787e19ae567805'
    },
    {
      name: 'e11',
      brief: 'DEPRECATED since version 2vrmatrix3:get',
    ref: 'structvrmatrix3.html#1a32af0985f70a52ba28891f85c2fb4dbc'
    },
    {
      name: 'forward',
      brief: 'Forward vector',
    ref: 'structvrmatrix3.html#1a365f1da207d2ee981c7a77d9286bbe1e'
    },
    {
      name: 'e21',
      brief: 'DEPRECATED since version 2vrmatrix3:get',
    ref: 'structvrmatrix3.html#1a468a8021a5afcc6ae9b8aa3b125faa7c'
    },
    {
      name: 'e10',
      brief: 'DEPRECATED since version 2vrmatrix3:get',
    ref: 'structvrmatrix3.html#1a55668c2947ef8c7d5d10c6c0ffe9d608'
    },
    {
      name: 'rotateZ',
      brief: 'vrMatRotateEulerZ) Return M rotated on the Z axis by angle V',
    ref: 'structvrmatrix3.html#1a65ea4f86b4a437d8afd648ba99472b0c'
    },
    {
      name: 'e12',
      brief: 'DEPRECATED since version 2vrmatrix3:get',
    ref: 'structvrmatrix3.html#1a78c55594f72fb3e69edc8d6a9d2d16c9'
    },
    {
      name: 'e00',
      brief: 'DEPRECATED since version 2vrmatrix3:get',
    ref: 'structvrmatrix3.html#1a7bece9549cde15cec132a3d46baa9e64'
    },
    {
      name: 'e02',
      brief: 'DEPRECATED since version 2vrmatrix3:get',
    ref: 'structvrmatrix3.html#1a8bfebbfd73c7943f49cd7add1d399fea'
    },
    {
      name: 'get',
      brief: 'vrMatGetValue) Get the value of an element of a matrix',
    ref: 'structvrmatrix3.html#1a8f37ca7fa32303d8503eab3d8ec45c64'
    },
    {
      name: 'operator=',
      brief: '',
    ref: 'structvrmatrix3.html#1a9104747827afe0185c3863266bf7d874'
    },
    {
      name: 'e22',
      brief: 'DEPRECATED since version 2vrmatrix3:get',
    ref: 'structvrmatrix3.html#1a9da6f7ec7637fa5b0c41da442305d9e9'
    },
    {
      name: 'translate',
      brief: 'vrMatTranslate) Return M translated by the vector V',
    ref: 'structvrmatrix3.html#1aa0ed7ed4f743d6010bbb7082f4260b96'
    },
    {
      name: 'getTranspose',
      brief: 'vrMatTranspose) Returns the tranpose of a 3x3 matrix, or a 4x4 matrix with the 3x3 component transposed',
    ref: 'structvrmatrix3.html#1aa773b69cc29278ee5d7ddf072ccd1054'
    },
    {
      name: 'toString',
      brief: 'vrMatToString) Get a string representation of a matrix',
    ref: 'structvrmatrix3.html#1aac18958a023e31d1abc45524bfb74468'
    },
    {
      name: 'operator+',
      brief: '',
    ref: 'structvrmatrix3.html#1abcbc6e2f2d68db01342d5dfc4442c348'
    },
    {
      name: 'e20',
      brief: 'DEPRECATED since version 2vrmatrix3:get',
    ref: 'structvrmatrix3.html#1ac81388b9d2d3980da495fbe3a85bc52e'
    },
    {
      name: 'det',
      brief: 'DEPRECATED since version 2determinant instead',
    ref: 'structvrmatrix3.html#1ad3969d345f01f06066155a341ff33666'
    },
    {
      name: 'right',
      brief: 'Right vector',
    ref: 'structvrmatrix3.html#1ad705b2a3150b230889a7c6c41ebb4fde'
    },
    {
      name: 'copy',
      brief: 'vrCopy) Returns a copy of a Vector, Matrix, Ray, Sphere, AABBox, Quaternion or Plane ',
    ref: 'structvrmatrix3.html#1ad7c8e80b2c3093b2c67f168a62b4eb2e'
    },
    {
      name: 'set',
      brief: 'vrMatSetValue) Set the value of an element of a matrix',
    ref: 'structvrmatrix3.html#1ae6931784ffaeddd87ee9118187a77f89'
    },
    {
      name: 'orthoNormalise',
      brief: 'vrMatOrthoNormalise) Returns an orthogonal matrix',
    ref: 'structvrmatrix3.html#1aec334f66cbf3cf0df2381993061af9c6'
    },
    {
      name: 'applyScale',
      brief: 'vrMatScale) Return M scaled by vector V',
    ref: 'structvrmatrix3.html#1af8d3a91c801c25784a6eb4d6c8437a99'
    },
    {
      name: 'operator-',
      brief: '',
    ref: 'structvrmatrix3.html#1afde966bd9bf1e17f0485a4a5ad0c8b09'
    },
    {
      name: 'e21',
      brief: 'DEPRECATED since version 2vrmatrix4:get',
    ref: 'structvrmatrix4.html#1a0277932c8b27e2f436926861d5fc90d0'
    },
    {
      name: 'e20',
      brief: 'DEPRECATED since version 2vrmatrix4:get',
    ref: 'structvrmatrix4.html#1a1046429c38dcb1184504760b023ac771'
    },
    {
      name: 'e02',
      brief: 'DEPRECATED since version 2vrmatrix4:get',
    ref: 'structvrmatrix4.html#1a12dde24564545beaf42b937a3f686638'
    },
    {
      name: 'rotateZ',
      brief: 'vrMatRotateEulerZ) Return M rotated on the Z axis by angle V',
    ref: 'structvrmatrix4.html#1a2244abe4f10b2bdda1dc50a1e702015c'
    },
    {
      name: 'operator=',
      brief: '',
    ref: 'structvrmatrix4.html#1a24a85642f872854eba2fe46e62f63a50'
    },
    {
      name: 'rotateX',
      brief: 'vrMatRotateEulerX) Return M rotated on the X axis by angle V',
    ref: 'structvrmatrix4.html#1a2b1e7c92bb994f8b15c50a3e94b30738'
    },
    {
      name: 'rotation',
      brief: 'Rotation component ',
    ref: 'structvrmatrix4.html#1a30d2c69afd829fa1be0b102c4699eb91'
    },
    {
      name: 'e32',
      brief: 'DEPRECATED since version 2vrmatrix4:get',
    ref: 'structvrmatrix4.html#1a37823e989a7c731e64576aa04bcbdb39'
    },
    {
      name: 'e13',
      brief: 'DEPRECATED since version 2vrmatrix4:get',
    ref: 'structvrmatrix4.html#1a39331eec7815867075cc1e9e885c037e'
    },
    {
      name: 'translate',
      brief: 'vrMatTranslate) Return M translated by the vector V',
    ref: 'structvrmatrix4.html#1a3fc1db18166e6380b1a6e8889abe71bf'
    },
    {
      name: 'forward',
      brief: 'Forward vector',
    ref: 'structvrmatrix4.html#1a45975a519e3a092dc02e5dead5e39477'
    },
    {
      name: 'e33',
      brief: 'DEPRECATED since version 2vrmatrix4:get',
    ref: 'structvrmatrix4.html#1a48ce6372493ef12d70b65fd983bd4be0'
    },
    {
      name: 'getTranspose',
      brief: 'vrMatTranspose) Returns the tranpose of a 3x3 matrix, or a 4x4 matrix with the 3x3 component transposed',
    ref: 'structvrmatrix4.html#1a4df03cfc6116767a1ae7c2c2a3b7426a'
    },
    {
      name: 'getInverse',
      brief: 'vrMatInverse) Returns the inverse of a 4x4 matrix',
    ref: 'structvrmatrix4.html#1a51ebf9d7653ddd14c0e7d63b94650b94'
    },
    {
      name: 'operator-',
      brief: '',
    ref: 'structvrmatrix4.html#1a52b0e59ddb29717818812de840a2f800'
    },
    {
      name: 'set',
      brief: 'vrMatSetValue) Set the value of an element of a matrix',
    ref: 'structvrmatrix4.html#1a5742a0e6abad08234b4896c05eb068ac'
    },
    {
      name: 'determinant',
      brief: 'vrMatDeterminant) Returns the determinant of the matrix ',
    ref: 'structvrmatrix4.html#1a579b7e3fec5d84c871f027e9d3f51024'
    },
    {
      name: 'get',
      brief: 'vrMatGetValue) Get the value of an element of a matrix',
    ref: 'structvrmatrix4.html#1a57d0f1e1c448d97e29fb40c5c6124878'
    },
    {
      name: 'e12',
      brief: 'DEPRECATED since version 2vrmatrix4:get',
    ref: 'structvrmatrix4.html#1a585591cd86ba2a7cf9127358dab1ac21'
    },
    {
      name: 'scale',
      brief: 'Scale component',
    ref: 'structvrmatrix4.html#1a5b2604134bc05b476a41e6f33ae89c79'
    },
    {
      name: 'e31',
      brief: 'DEPRECATED since version 2vrmatrix4:get',
    ref: 'structvrmatrix4.html#1a5f167f06964d2ec0e7635623aa634d2a'
    },
    {
      name: 'e30',
      brief: 'DEPRECATED since version 2vrmatrix4:get',
    ref: 'structvrmatrix4.html#1a648af1b42f85c879da072a2c7c26a8ff'
    },
    {
      name: 'applyScale',
      brief: 'vrMatScale) Return M scaled by vector V',
    ref: 'structvrmatrix4.html#1a76b2c3eb94b509093f29b06d9ebe9412'
    },
    {
      name: 'rotateY',
      brief: 'vrMatRotateEulerY) Return M rotated on the Y axis by angle V',
    ref: 'structvrmatrix4.html#1a779142691d53ce812ef00029c4027e1a'
    },
    {
      name: 'operator/',
      brief: '',
    ref: 'structvrmatrix4.html#1a78af0dd018a6021d9022c5e47dc8ce84'
    },
    {
      name: 'operator*',
      brief: '',
    ref: 'structvrmatrix4.html#1a81136bd8b7a5b30e568c2db1932cabb7'
    },
    {
      name: 'e23',
      brief: 'DEPRECATED since version 2vrmatrix4:get',
    ref: 'structvrmatrix4.html#1a82b5c6b559312704005eed1a761d3a29'
    },
    {
      name: 'e01',
      brief: 'DEPRECATED since version 2vrmatrix4:get',
    ref: 'structvrmatrix4.html#1a8fdd3fb18312c612f6acf08e2bf159cc'
    },
    {
      name: 'orthoNormalise',
      brief: 'vrMatOrthoNormalise) Returns an orthogonal matrix',
    ref: 'structvrmatrix4.html#1a922b9486925c446ac2db98e68a89f15c'
    },
    {
      name: 'e00',
      brief: 'DEPRECATED since version 2vrmatrix4:get',
    ref: 'structvrmatrix4.html#1a99d6676d561d160b241bffd3dca92634'
    },
    {
      name: 'up',
      brief: 'Up vector',
    ref: 'structvrmatrix4.html#1a9cc1e2b86d8b171a391ce1aeff2094e2'
    },
    {
      name: 'position',
      brief: 'Position vector',
    ref: 'structvrmatrix4.html#1aa555edebd025d6269835f7fc6fd19291'
    },
    {
      name: 'toString',
      brief: 'vrMatToString) Get a string representation of a matrix',
    ref: 'structvrmatrix4.html#1aa8e57dd62eef9d76c3a47d21bc67b0c6'
    },
    {
      name: 'e03',
      brief: 'DEPRECATED since version 2vrmatrix4:get',
    ref: 'structvrmatrix4.html#1aad216e3d628554f11246b4b4dbf634df'
    },
    {
      name: 'e10',
      brief: 'DEPRECATED since version 2vrmatrix4:get',
    ref: 'structvrmatrix4.html#1abaf716c5314d1e6081f95b24ca2634bf'
    },
    {
      name: 'inverse',
      brief: 'DEPRECATED since version 2getInverse instead',
    ref: 'structvrmatrix4.html#1abd646b1923bce6986b384d7c30b490dd'
    },
    {
      name: 'right',
      brief: 'Right vector',
    ref: 'structvrmatrix4.html#1ac16c64149583da2511221e891fcbbb96'
    },
    {
      name: 'copy',
      brief: 'vrCopy) Returns a copy of a Vector, Matrix, Ray, Sphere, AABBox, Quaternion or Plane ',
    ref: 'structvrmatrix4.html#1ac5f8ed0ecbb88b11e2d2a5e52ccae0ed'
    },
    {
      name: 'det',
      brief: 'DEPRECATED since version 2determinant instead',
    ref: 'structvrmatrix4.html#1ac88bd63a4bee56d5d6ec6ccb323f0ce4'
    },
    {
      name: 'normalise',
      brief: 'vrNormalise) Returns normalised vector/matrix',
    ref: 'structvrmatrix4.html#1acfa02e365e65b8c85b8daaac9d8c7693'
    },
    {
      name: 'operator+',
      brief: '',
    ref: 'structvrmatrix4.html#1ad2c4106906f7b7e3bd7b0a1f51d4c652'
    },
    {
      name: 'e11',
      brief: 'DEPRECATED since version 2vrmatrix4:get',
    ref: 'structvrmatrix4.html#1adb91a279c2ea87cb486effd3cff58796'
    },
    {
      name: 'transpose',
      brief: 'DEPRECATED since version 2getTranspose instead',
    ref: 'structvrmatrix4.html#1af09d17409547e4f7c3d4d741b78e1e73'
    },
    {
      name: 'e22',
      brief: 'DEPRECATED since version 2vrmatrix4:get',
    ref: 'structvrmatrix4.html#1af25c7daca3718420476d31e67ee76235'
    },
    {
      name: 'tail',
      brief: 'vrNodeGetTail) Gets the last child of a node',
    ref: 'structvrnode.html#1a005bb52dd869d1c73b2a773dcc0b95f9'
    },
    {
      name: 'setLocalPRS',
      brief: 'vrNodeSetLocal) DEPRECATED ',
    ref: 'structvrnode.html#1a06248f02d707267e794cf89ed3bcdc58'
    },
    {
      name: 'setParent',
      brief: 'vrNodeSetParent) Sets the parent of a node',
    ref: 'structvrnode.html#1a0eeffa0fb5bdfa2cc07debfb7560d12e'
    },
    {
      name: 'setWorld',
      brief: 'vrNodeSetWorldTransform) DEPRECATED ',
    ref: 'structvrnode.html#1a0f8736d06d600789e9c5b79549078afd'
    },
    {
      name: 'forEachChild',
      brief: 'vrNodeForEachChild) Calls a function for each child of a node ',
    ref: 'structvrnode.html#1a17c6610e5b547adf9d8999e7084998c0'
    },
    {
      name: 'setLocal',
      brief: 'vrNodeSetLocalTransform) DEPRECATED ',
    ref: 'structvrnode.html#1a18c53a269e5fa41a65aeda6b4e0a44fe'
    },
    {
      name: 'find',
      brief: 'vrNodeFindChild) Finds a descendant of a node by path ',
    ref: 'structvrnode.html#1a2c8436207b280db83f036e0c0811a2e4'
    },
    {
      name: 'path',
      brief: 'vrNodeGetPath) Gets the encoded path to a node relative to the tree root ',
    ref: 'structvrnode.html#1a2d2230a40634505d041a491a6637c225'
    },
    {
      name: 'child',
      brief: 'vrNodeGetChild) Gets the first child of a node',
    ref: 'structvrnode.html#1a2f9ba83410e44a06699a8e109e739b85'
    },
    {
      name: 'hasTrait',
      brief: 'vrNodeHasTrait) Checks if the node is of a type with a specific trait',
    ref: 'structvrnode.html#1a3676fc2b16b7af56aed8f1c4b032b898'
    },
    {
      name: 'setRelative',
      brief: 'vrNodeSetRelativeTransform) Sets the position, rotation and scale of the world transform of a node relative to another',
    ref: 'structvrnode.html#1a371e8d865f85d67d8fb34a4cd65f7b0e'
    },
    {
      name: 'getParent',
      brief: 'vrNodeGetParent) Gets the parent of a node',
    ref: 'structvrnode.html#1a3f5f3ff76db25b02796b544fbf4faf5c'
    },
    {
      name: 'traits',
      brief: 'vrNodeGetTraits) Gets the list of traits that this node has',
    ref: 'structvrnode.html#1a456bec6d1bb6548ea60317a9e929f821'
    },
    {
      name: 'getWorldPRS',
      brief: 'vrNodeGetWorld) DEPRECATED ',
    ref: 'structvrnode.html#1a4e73f013562d080ec94cbdc2a3eaab4a'
    },
    {
      name: 'getLocal',
      brief: 'vrNodeGetLocalTransform) DEPRECATED ',
    ref: 'structvrnode.html#1a586fb0c16dcd43fdf23dc4543c8bcca7'
    },
    {
      name: 'setWorldPRS',
      brief: 'vrNodeSetWorld) DEPRECATED ',
    ref: 'structvrnode.html#1a5cd7e2b029c549fe268e059341a013b2'
    },
    {
      name: 'getRelative',
      brief: 'vrNodeGetRelativeTransform) Gets the position, rotation and scale of the world transform of one node relative to another',
    ref: 'structvrnode.html#1a71b14c4fe1790687e1017f2583102e12'
    },
    {
      name: 'setLocalMatrix',
      brief: 'vrNodeSetLocalMatrix) DEPRECATED ',
    ref: 'structvrnode.html#1a7442d92d3d5c608b41140dca52fb664a'
    },
    {
      name: 'ancestor',
      brief: 'vrNodeGetAncestor) Gets the first ancestor of the specified type ',
    ref: 'structvrnode.html#1a8b68688974f3ae9a8dbcfcbb4d99141d'
    },
    {
      name: 'type',
      brief: 'vrNodeGetMetaNode) Gets the name of the MetaNode that a node is an instance of',
    ref: 'structvrnode.html#1a985f4ec9f7dd65ff7552b2f80595fdd0'
    },
    {
      name: 'setName',
      brief: 'vrNodeSetName) Sets the name of a node',
    ref: 'structvrnode.html#1a98e8a0f89aef2a33ea87815358fa7fe2'
    },
    {
      name: 'forEachChildOfType',
      brief: 'vrNodeForEachChildOfType) Calls a function for each child of a node that matches a specified type ',
    ref: 'structvrnode.html#1a9fbbb9eb4f849980e5ddc4351be4e148'
    },
    {
      name: 'previous',
      brief: 'vrNodeGetPreviousSibling) Gets the previous sibling ',
    ref: 'structvrnode.html#1aa7b149f89ef009aa4fea32ea09766fef'
    },
    {
      name: 'sibling',
      brief: 'vrNodeGetSibling) Gets the sibling ',
    ref: 'structvrnode.html#1ab22befe5b5b049276fa8b2c1b4c6b627'
    },
    {
      name: 'relpath',
      brief: 'vrNodeGetRelativePath) Gets the encoded path to a node, relative to another node',
    ref: 'structvrnode.html#1aca5bb54a366da8c99eb9cfba3b259561'
    },
    {
      name: 'next',
      brief: 'vrNodeGetSibling) Gets the sibling ',
    ref: 'structvrnode.html#1acdecea6d02be89b2c869e23010d8bf6d'
    },
    {
      name: 'childbyindex',
      brief: 'vrNodeGetChildByIndex) Gets a nodes child by its zero-based indexvrNodeGetChild and vrNodeGetSibling instead ',
    ref: 'structvrnode.html#1aceabcfd9d76c95f67da5ba3560c47a4c'
    },
    {
      name: 'getWorld',
      brief: 'vrNodeGetWorldTransform) DEPRECATED ',
    ref: 'structvrnode.html#1ad04d431a56384d5cc98fbff804a6e714'
    },
    {
      name: 'count',
      brief: 'vrNodeGetChildCount) Counts the children of a nodevrNodeGetChild and vrNodeGetSibling instead ',
    ref: 'structvrnode.html#1ae14a5df57c6c552d7b3d0f5d674838f1'
    },
    {
      name: 'getLocalPRS',
      brief: 'vrNodeGetLocal) DEPRECATED ',
    ref: 'structvrnode.html#1ae312d30d61e2c4d5f255ec1c3a2168dd'
    },
    {
      name: 'parent',
      brief: 'vrNodeGetParent) Gets the parent of a node',
    ref: 'structvrnode.html#1ae89f775eb3d67d13c11c963631fda997'
    },
    {
      name: 'getName',
      brief: 'vrNodeGetName) Gets the name of a node',
    ref: 'structvrnode.html#1afdfcfe65eb18a47fc1dcf5aa7e1fae32'
    },
    {
      name: 'getLocalMatrix',
      brief: 'vrNodeGetLocalMatrix) DEPRECATED ',
    ref: 'structvrnode.html#1affc5b4fed92457c8b03733abcd502ad0'
    },
    {
      name: 'operator=',
      brief: '',
    ref: 'structvrplane.html#1a1ae851e28904d2aa7e23115b8d02638c'
    },
    {
      name: 'copy',
      brief: 'vrCopy) Returns a copy of a Vector, Matrix, Ray, Sphere, AABBox, Quaternion or Plane ',
    ref: 'structvrplane.html#1a251a411646b52e084d17b3bca2a5b641'
    },
    {
      name: 'transform',
      brief: 'vrPlaneTransform) Returns a plane transformed by a matrix',
    ref: 'structvrplane.html#1a495dee40f684a2b30f232d89a22da5b7'
    },
    {
      name: 'normal',
      brief: 'Normal of the plane',
    ref: 'structvrplane.html#1a5107fbc8582c26c7ecaabd7328491372'
    },
    {
      name: 'rayIntersect',
      brief: 'vrPlaneRayIntersect) Returns how far along the ray an intersection point with this plane is',
    ref: 'structvrplane.html#1a87b5adb2fedcca1f2ac1ded5d8ed9bc0'
    },
    {
      name: 'distance',
      brief: 'Dot product of any point on the plane with its normal',
    ref: 'structvrplane.html#1a8b6df4f25a269187fe98c49a28fd8731'
    },
    {
      name: 'lineIntersect',
      brief: 'vrPlaneLineIntersect) Returns whether or not a line made of two points will intersect a plane',
    ref: 'structvrplane.html#1a8c533c672d6f43f85851c6279edbd9f3'
    },
    {
      name: 'getDistance',
      brief: 'vrPlaneGetPointDistance) Returns the distance a point is from the plane',
    ref: 'structvrplane.html#1a976a8c0f95601083fa159b9c6fcccc66'
    },
    {
      name: 'operator*',
      brief: '',
    ref: 'structvrquaternion.html#1a1b2d4b549bc626280251df8b9ae27e47'
    },
    {
      name: 'vec4',
      brief: 'xyzw vector ',
    ref: 'structvrquaternion.html#1a2f499c58fde914c256f479fc5bfe9afe'
    },
    {
      name: 'operator=',
      brief: '',
    ref: 'structvrquaternion.html#1a515dd68ffec77d556918605d3bea4deb'
    },
    {
      name: 'operator+',
      brief: '',
    ref: 'structvrquaternion.html#1a55e734442244a6095a13222f2f991650'
    },
    {
      name: 'operator-',
      brief: '',
    ref: 'structvrquaternion.html#1a658500e73c0d4c9c09a669412359ab5b'
    },
    {
      name: 'w',
      brief: 'w component ',
    ref: 'structvrquaternion.html#1a8d1297e358ea6cab49822ee16f39ed74'
    },
    {
      name: 'x',
      brief: 'x component ',
    ref: 'structvrquaternion.html#1a9e51be92fd4ad5f9e9e2034ed2e029c0'
    },
    {
      name: 'operator/',
      brief: '',
    ref: 'structvrquaternion.html#1aa6e6f3b922e1ae1100994a3744afbef1'
    },
    {
      name: 'z',
      brief: 'z component ',
    ref: 'structvrquaternion.html#1aa9a7db9fffa7a6beb3deffb3f1204eeb'
    },
    {
      name: 'copy',
      brief: 'vrCopy) Returns a copy of a Vector, Matrix, Ray, Sphere, AABBox, Quaternion or Plane ',
    ref: 'structvrquaternion.html#1ac403a16be79472f0304c907a52b92eb9'
    },
    {
      name: 'dot',
      brief: 'vrQuaternionDot) Returns the dot product of two quaternions',
    ref: 'structvrquaternion.html#1ad8ad451c709f3713bca406b5f88270ef'
    },
    {
      name: 'v',
      brief: 'xyz vector ',
    ref: 'structvrquaternion.html#1ada8877f2a2c3c1568013c7cb916cb0b1'
    },
    {
      name: 'y',
      brief: 'y component ',
    ref: 'structvrquaternion.html#1af441d43cf7debccc7d7e47be39d79eb1'
    },
    {
      name: 'origin',
      brief: 'Start of the ray',
    ref: 'structvrray.html#1a1490de5954b0b185afc3864b55a6abeb'
    },
    {
      name: 'copy',
      brief: 'vrCopy) Returns a copy of a Vector, Matrix, Ray, Sphere, AABBox, Quaternion or Plane ',
    ref: 'structvrray.html#1a5ef9d808c33415fc11c98881470bcd67'
    },
    {
      name: 'direction',
      brief: 'Direction of the ray',
    ref: 'structvrray.html#1a7e38a68792aee447564d102931cbca20'
    },
    {
      name: 'operator=',
      brief: '',
    ref: 'structvrray.html#1a83514b4f827383ed89e8dd8b94f143da'
    },
    {
      name: 'radius',
      brief: 'Radius of the sphere',
    ref: 'structvrsphere.html#1a09bc18b387228b8cb6180b9986495e98'
    },
    {
      name: 'contains',
      brief: 'vrTestContain) Returns whether or object A completly contains object B',
    ref: 'structvrsphere.html#1a1a9f3c4d253e0c34400c0db359be111c'
    },
    {
      name: 'intersects',
      brief: 'vrTestIntersection) Returns whether or not two objects are intersecting one another',
    ref: 'structvrsphere.html#1a371b233a176d920e8f005d4f92b41eed'
    },
    {
      name: 'center',
      brief: 'Centre of the sphere',
    ref: 'structvrsphere.html#1a4e4f8340d64230c0438c9c51186be12f'
    },
    {
      name: 'operator=',
      brief: '',
    ref: 'structvrsphere.html#1a5a29a09c027f024d49de4d73471fb37a'
    },
    {
      name: 'merge',
      brief: 'vrSphereMerge) Returns a sphere that encapsulates two spheres',
    ref: 'structvrsphere.html#1a7b00c579da5ed9975bb37593f93ef892'
    },
    {
      name: 'centre',
      brief: 'Centre of the sphere',
    ref: 'structvrsphere.html#1a7c43515caf5f21f12e6d11e3243c2691'
    },
    {
      name: 'transform',
      brief: 'vrSphereTransform) Returns a sphere transformed by a matrix',
    ref: 'structvrsphere.html#1a8e1f119e478da556c02cae09b34bd39b'
    },
    {
      name: 'copy',
      brief: 'vrCopy) Returns a copy of a Vector, Matrix, Ray, Sphere, AABBox, Quaternion or Plane ',
    ref: 'structvrsphere.html#1ac1308307320084b1f219cb7ec898d221'
    },
    {
      name: 'IDX',
      brief: '',
    ref: 'structvrtree_1_1_meta___collaboration_chat_msg.html#1ae6cbe619999a89a1928960d2219e31a6'
    },
    {
      name: 'IDX',
      brief: '',
    ref: 'structvrtree_1_1_meta___collaboration_info.html#1a31526d20d9dab41a6f557dce6b886d31'
    },
    {
      name: 'IDX',
      brief: '',
    ref: 'structvrtree_1_1_meta___collaboration_user_info.html#1a314b1fb6e7902b8573a0cc7267372c9e'
    },
    {
      name: 'IDX',
      brief: '',
    ref: 'structvrtree_1_1_meta___lua_event.html#1ae0e12a142954430a141e02d9111ac9fe'
    },
    {
      name: 'IDX',
      brief: '',
    ref: 'structvrtree_1_1_meta___manikin.html#1aa688c2616731b77d62a584c4214007db'
    },
    {
      name: 'IDX',
      brief: '',
    ref: 'structvrtree_1_1_meta___manikin_bone.html#1a0cf42ee751a888e621eed5e36c62eb49'
    },
    {
      name: 'IDX',
      brief: '',
    ref: 'structvrtree_1_1_meta___manikin_root_bone.html#1a0ab3d4b85b811d37b98de2c7dc55e621'
    },
    {
      name: 'IDX',
      brief: '',
    ref: 'structvrtree_1_1_meta___manikin_target.html#1ae2c0a5a0bb1c00a6c032157507e26c46'
    },
    {
      name: 'IDX',
      brief: '',
    ref: 'structvrtree_1_1_meta___platform_l_o_d.html#1a06e8b3a6ebce3b37ad9902f3a77b9290'
    },
    {
      name: 'IDX',
      brief: '',
    ref: 'structvrtree_1_1_meta___remote_mesh.html#1a412d259e6622c1ea081eb39b23901348'
    },
    {
      name: 'IDX',
      brief: '',
    ref: 'structvrtree_1_1_meta___remote_texture.html#1a68c1e9fc1cd7b953a4574c6f73063a43'
    },
    {
      name: 'IDX',
      brief: '',
    ref: 'structvrtree_1_1_meta___tracking_node.html#1ab0e3afac3979a80c4068e4ebe2abfc4b'
    },
    {
      name: 'IDX',
      brief: '',
    ref: 'structvrtree_1_1_meta___yeti_g_u_i.html#1a875abc7214623fba8f020ca02c79a39f'
    },
    {
      name: 'rc',
      brief: 'Reference counter',
    ref: 'structvrtree__cpp_1_1_h_ref_count.html#1a16435d933226e254e083fcb4d4b1c8c6'
    },
    {
      name: 'HRefCount',
      brief: '',
    ref: 'structvrtree__cpp_1_1_h_ref_count.html#1a3c02dac336f559c3342e0607ba95b277'
    },
    {
      name: 'inc',
      brief: 'Increments the reference counter',
    ref: 'structvrtree__cpp_1_1_h_ref_count.html#1a4cbf2ba97ef498bf2802bab2d53a4147'
    },
    {
      name: 'HRefCount',
      brief: '',
    ref: 'structvrtree__cpp_1_1_h_ref_count.html#1a8e559147f8f8ff3d96b72cba2a16e3d8'
    },
    {
      name: 'dec',
      brief: 'Decrements the reference counter',
    ref: 'structvrtree__cpp_1_1_h_ref_count.html#1ac1313c1678739a28b242dea5e68088ea'
    },
    {
      name: 'operator=',
      brief: '',
    ref: 'structvrtree__cpp_1_1_h_ref_count.html#1af172846b6c0f74dfd842a02b1cddc1ed'
    },
    {
      name: 'raw',
      brief: 'Converts an array of reference counted handles to an array of raw handles for passing to an api function that expects an array of handles',
    ref: 'structvrtree__cpp_1_1_h_type_r.html#1a1565b6c3b68684c40cc4b50c9ad52a26'
    },
    {
      name: 'HTypeR',
      brief: 'Construct from a raw node handle and make it refcounted',
    ref: 'structvrtree__cpp_1_1_h_type_r.html#1a1864c2f80abd6a11fd8dfe3855f06c3e'
    },
    {
      name: 'm_handle',
      brief: 'The handle to wrap',
    ref: 'structvrtree__cpp_1_1_h_type_r.html#1a25f375e33e9cb13e368565a20dc8ba6a'
    },
    {
      name: 'operator=',
      brief: 'Assign a raw handle and make it refcounted',
    ref: 'structvrtree__cpp_1_1_h_type_r.html#1a52db9a55a44fd9489d39e7c83f87919d'
    },
    {
      name: 'operator T',
      brief: 'Access the raw node handle',
    ref: 'structvrtree__cpp_1_1_h_type_r.html#1a6b0c46ab5198c1e2c7982dbd8eaa6539'
    },
    {
      name: 'operator<',
      brief: 'Compare the raw node handle for storage in ordered containers',
    ref: 'structvrtree__cpp_1_1_h_type_r.html#1a78f4eed9c76bf169acacf93d61ef83c8'
    },
    {
      name: 'dec',
      brief: 'Manually decrement the refcount',
    ref: 'structvrtree__cpp_1_1_h_type_r.html#1a8a9b2769c2823130e400f30a543fb1e8'
    },
    {
      name: 'operator=',
      brief: 'Assign an existing handle',
    ref: 'structvrtree__cpp_1_1_h_type_r.html#1a912e6bfad31adaeb70a89416a1a816c6'
    },
    {
      name: 'HTypeR',
      brief: 'Construct a null handle',
    ref: 'structvrtree__cpp_1_1_h_type_r.html#1a913add893205f449e3393bbfe4b57a02'
    },
    {
      name: 'inc',
      brief: 'Manually increment the refcount ',
    ref: 'structvrtree__cpp_1_1_h_type_r.html#1a9f1bb786badc1dd7f0c223f402215f12'
    },
    {
      name: 'ptr',
      brief: 'Reference counter',
    ref: 'structvrtree__cpp_1_1_h_type_r.html#1ab6ec5bc17a8a418e3237f51d36ad138d'
    },
    {
      name: '~HTypeR',
      brief: 'Decrements refcount, closing the node handle if this is the last reference',
    ref: 'structvrtree__cpp_1_1_h_type_r.html#1ad17a45528e8a6b50db5a4881dcbf6778'
    },
    {
      name: 'HTypeR',
      brief: 'Copy an existing handle, incrementing its refcount',
    ref: 'structvrtree__cpp_1_1_h_type_r.html#1aeb96abd124e8c3a82a6ae19abf13c508'
    },
    {
      name: 'close',
      brief: 'Close an FFI var handle',
    ref: 'structvrtree__cpp_1_1_handle.html#1a0c42d0efaa0821b2c9b6e143c5b53923'
    },
    {
      name: 'close',
      brief: 'Closes a node handle',
    ref: 'structvrtree__cpp_1_1_handle.html#1a7a17aa7055593745f5fc11b396c254b0'
    },
    {
      name: 'close',
      brief: 'Closes a metanode handle',
    ref: 'structvrtree__cpp_1_1_handle.html#1ad4537b182c0502d8f8d415e2277ccb5f'
    },
    {
      name: 'close',
      brief: 'Closes a migration handle',
    ref: 'structvrtree__cpp_1_1_handle.html#1af8f503654bc85f1b02800a1263b035d9'
    },
    {
      name: 'NodeRenamed',
      brief: '',
    ref: 'structvrtree__cpp_1_1_observer_wrapper.html#1a0bbc4ffebd2e256a9e9e18af1ac6674a'
    },
    {
      name: 'NodeChildAdded',
      brief: '',
    ref: 'structvrtree__cpp_1_1_observer_wrapper.html#1a1440bf82f3ae969ff35fb567797a382a'
    },
    {
      name: 'NodeParentChanged',
      brief: '',
    ref: 'structvrtree__cpp_1_1_observer_wrapper.html#1a47ba9a9179dbf3c042e3b039de3c1942'
    },
    {
      name: 'NodeValuesChanged',
      brief: '',
    ref: 'structvrtree__cpp_1_1_observer_wrapper.html#1a7c9e4920e0cc085f0b9429dcb6811a3e'
    },
    {
      name: 'NodeChildRemoved',
      brief: '',
    ref: 'structvrtree__cpp_1_1_observer_wrapper.html#1a8c3e173609b274b67027b7465b333195'
    },
    {
      name: 'NodeCreated',
      brief: '',
    ref: 'structvrtree__cpp_1_1_observer_wrapper.html#1ad4df0e5e45f413aa6418d5bb65e94b63'
    },
    {
      name: 'NodeDestroying',
      brief: '',
    ref: 'structvrtree__cpp_1_1_observer_wrapper.html#1adec4a4e3fca6618abb7d2f9f15e59444'
    },
    {
      name: 'y',
      brief: 'y element ',
    ref: 'structvrvec2.html#1a02f1dfe3c9837b91eba0b84e13f39fda'
    },
    {
      name: 'operator=',
      brief: '',
    ref: 'structvrvec2.html#1a10d2f11e1c3d7eed51ff282f68b7175b'
    },
    {
      name: 'x',
      brief: 'x element ',
    ref: 'structvrvec2.html#1a14d722a7d696f9dfc9ddef40783b9865'
    },
    {
      name: 'getLengthSq',
      brief: 'vrLengthSquared) Returns the squared length of a vector',
    ref: 'structvrvec2.html#1a1d7ab0506eb68992cf1d1433db75e708'
    },
    {
      name: 'xy',
      brief: 'xy elements ',
    ref: 'structvrvec2.html#1a3ae24e2e45e24245465b0dbf1a4683cf'
    },
    {
      name: 'operator-',
      brief: '',
    ref: 'structvrvec2.html#1a4046459b2a3eb52153c300f8fed86708'
    },
    {
      name: 'operator/',
      brief: '',
    ref: 'structvrvec2.html#1a46e77038039df884da4e1d217fd8d7a4'
    },
    {
      name: 'cross',
      brief: 'vrCross) Returns the cross product of two vectors',
    ref: 'structvrvec2.html#1a64b35e0756a157d4ee03636fbafe98ad'
    },
    {
      name: 'length',
      brief: 'DEPRECATED since version 2vrvec2:getLength instead',
    ref: 'structvrvec2.html#1a7aa678bf3bfce0718e4fbc37acec4641'
    },
    {
      name: 'yx',
      brief: 'yx elements ',
    ref: 'structvrvec2.html#1a80aa19426b112b4e2c3ef80a787ba715'
    },
    {
      name: 'dot',
      brief: 'vrDot) Returns the dot product of two vectors',
    ref: 'structvrvec2.html#1a9e0a244c3214b012af4a20d450588689'
    },
    {
      name: 'getLength',
      brief: 'vrLength) Returns the length of a vector',
    ref: 'structvrvec2.html#1aa21469176d624a568d68bf1e32b6f14d'
    },
    {
      name: 'operator+',
      brief: '',
    ref: 'structvrvec2.html#1aa437b64bed4c37c29bce873c13512b98'
    },
    {
      name: 'normalise',
      brief: 'vrNormalise) Returns normalised vector/matrix',
    ref: 'structvrvec2.html#1abaaf922ff01fb0428d1d92c0fc0989de'
    },
    {
      name: 'copy',
      brief: 'vrCopy) Returns a copy of a Vector, Matrix, Ray, Sphere, AABBox, Quaternion or Plane ',
    ref: 'structvrvec2.html#1ae351ae450bd89bcd0a3c3e594df98644'
    },
    {
      name: 'operator*',
      brief: '',
    ref: 'structvrvec2.html#1af8cbc3ac9c4555e998a0f77a9e37d1e7'
    },
    {
      name: 'xzy',
      brief: 'xzy elements ',
    ref: 'structvrvec3.html#1a107ee8e1a8a9081e337c3e4182f1664b'
    },
    {
      name: 'operator-',
      brief: '',
    ref: 'structvrvec3.html#1a132554ec3e2761fca1d6325305474da1'
    },
    {
      name: 'zy',
      brief: 'zy elements ',
    ref: 'structvrvec3.html#1a14486a17f33427d93d6a4def177d1d64'
    },
    {
      name: 'operator*',
      brief: '',
    ref: 'structvrvec3.html#1a182d6ba2755c906a2c98e3dd4fd74f8d'
    },
    {
      name: 'getLengthSq',
      brief: 'vrLengthSquared) Returns the squared length of a vector',
    ref: 'structvrvec3.html#1a2202d7858d9e4f1c0f304ec0328588c4'
    },
    {
      name: 'copy',
      brief: 'vrCopy) Returns a copy of a Vector, Matrix, Ray, Sphere, AABBox, Quaternion or Plane ',
    ref: 'structvrvec3.html#1a239b66043aa5f2238b66d699d11b6eff'
    },
    {
      name: 'getLength',
      brief: 'vrLength) Returns the length of a vector',
    ref: 'structvrvec3.html#1a2466a97c2aba023fd7552b0c817933ee'
    },
    {
      name: 'yaw',
      brief: 'Rotation around Y axis ',
    ref: 'structvrvec3.html#1a3251d8ad7d71c17dc81ff293fb645b3c'
    },
    {
      name: 'yxz',
      brief: 'yxz elements ',
    ref: 'structvrvec3.html#1a375526b61d4dff0d946374b0afedc898'
    },
    {
      name: 'pitch',
      brief: 'Rotation around X axis ',
    ref: 'structvrvec3.html#1a4226b1768f190c65f05ceb48b84a821e'
    },
    {
      name: 'yzx',
      brief: 'yzx elements ',
    ref: 'structvrvec3.html#1a4ad2d55b55c28ea9021b6774d21710f8'
    },
    {
      name: 'operator/',
      brief: '',
    ref: 'structvrvec3.html#1a4fe8113643c0ecc4fc60734048bff3c2'
    },
    {
      name: 'yz',
      brief: 'yz elements ',
    ref: 'structvrvec3.html#1a604cdfca6fd581e4a5c69c75fda0bc88'
    },
    {
      name: 'x',
      brief: 'x element ',
    ref: 'structvrvec3.html#1a627f7b4c46d42a7682f28f012494c1b4'
    },
    {
      name: 'dot',
      brief: 'vrDot) Returns the dot product of two vectors',
    ref: 'structvrvec3.html#1a66ec6aaed63645011346b582fe00ade8'
    },
    {
      name: 'length',
      brief: 'DEPRECATED since version 2vrvec3:getLength instead',
    ref: 'structvrvec3.html#1a7e434c919d5c0dc1177e2cf5221a38c1'
    },
    {
      name: 'y',
      brief: 'y element ',
    ref: 'structvrvec3.html#1a95e59dc2e4e69377b6fd7ffc9682c9c0'
    },
    {
      name: 'normalise',
      brief: 'vrNormalise) Returns normalised vector/matrix',
    ref: 'structvrvec3.html#1aa44efb1c259255335aa60f4efb0ffe63'
    },
    {
      name: 'z',
      brief: 'z element ',
    ref: 'structvrvec3.html#1ac8f790d318708b9892d8635f1535ad87'
    },
    {
      name: 'roll',
      brief: 'Rotation around Z axis ',
    ref: 'structvrvec3.html#1acebd798d4d3e3d057ca1cbc66a032955'
    },
    {
      name: 'operator=',
      brief: '',
    ref: 'structvrvec3.html#1ad080beb9038d56b03f9c22597d6e42fc'
    },
    {
      name: 'cross',
      brief: 'vrCross) Returns the cross product of two vectors',
    ref: 'structvrvec3.html#1ad6174da4a602a955b6575e6e5a3ce739'
    },
    {
      name: 'xy',
      brief: 'xy elements ',
    ref: 'structvrvec3.html#1ad6bfb3946393e711ef592248edb87db5'
    },
    {
      name: 'xz',
      brief: 'xz elements ',
    ref: 'structvrvec3.html#1adc1c1c17eb993627e6e5676839255367'
    },
    {
      name: 'operator+',
      brief: '',
    ref: 'structvrvec3.html#1ae0959e866f58604a5fc7e8e3a99d007a'
    },
    {
      name: 'xyz',
      brief: 'xyz elements ',
    ref: 'structvrvec3.html#1ae17aeb3376635a6ece9b2040978e5d0d'
    },
    {
      name: 'yx',
      brief: 'yx elements ',
    ref: 'structvrvec3.html#1ae2b218408f728d05570c7b21f2bea833'
    },
    {
      name: 'zyx',
      brief: 'zyx elements ',
    ref: 'structvrvec3.html#1ae85cdf8e37d3df6eb6938fd0b0d4a5e5'
    },
    {
      name: 'zxy',
      brief: 'zxy elements ',
    ref: 'structvrvec3.html#1aea38a9247dce6d5e144945b1e8fc07f2'
    },
    {
      name: 'zx',
      brief: 'zx elements ',
    ref: 'structvrvec3.html#1aebc565ffceae15b3f4137df93237b4fc'
    },
    {
      name: 'wzx',
      brief: 'wzx elements ',
    ref: 'structvrvec4.html#1a03e080750846af32adc332fcb9896d7f'
    },
    {
      name: 'z',
      brief: 'z element ',
    ref: 'structvrvec4.html#1a0666c653755d215540f869b3d966f677'
    },
    {
      name: 'wyx',
      brief: 'wyx elements ',
    ref: 'structvrvec4.html#1a06ff37fa4becfb33e1f274996d312f8f'
    },
    {
      name: 'yxw',
      brief: 'yxw elements ',
    ref: 'structvrvec4.html#1a0f599902924a8f300818a5cdb36d9e42'
    },
    {
      name: 'zyx',
      brief: 'zyx elements ',
    ref: 'structvrvec4.html#1a13abe991e323b35a8afaac2f04a502fd'
    },
    {
      name: 'xywz',
      brief: 'xywz elements ',
    ref: 'structvrvec4.html#1a14866c5fbd48e87ce104ce07ede89d34'
    },
    {
      name: 'yw',
      brief: 'yw elements ',
    ref: 'structvrvec4.html#1a1e24b3e86d18a3fc7a20e4c421108118'
    },
    {
      name: 'yzwx',
      brief: 'yzwx elements ',
    ref: 'structvrvec4.html#1a1fe18db1a483d7bdfa75d0af4e2d1622'
    },
    {
      name: 'dot',
      brief: 'vrDot) Returns the dot product of two vectors',
    ref: 'structvrvec4.html#1a26c050076d0ef9862bb72928ea8c5a6a'
    },
    {
      name: 'length',
      brief: 'DEPRECATED since version 2vrvec4:getLength instead',
    ref: 'structvrvec4.html#1a28fa0d5f3bfc92ad8b985b5bb5b83963'
    },
    {
      name: 'yzx',
      brief: 'yzx elements ',
    ref: 'structvrvec4.html#1a2c0ef2de717c5fda0b47ff5ae5757878'
    },
    {
      name: 'wzy',
      brief: 'wzy elements ',
    ref: 'structvrvec4.html#1a2c37c232da04d95848c7427d62581754'
    },
    {
      name: 'wxy',
      brief: 'wxy elements ',
    ref: 'structvrvec4.html#1a378ef3f8f3c8e86cf8ca1d923744a16e'
    },
    {
      name: 'wzxy',
      brief: 'wzxy elements ',
    ref: 'structvrvec4.html#1a389730a02f0766f594b2bd097dbb1667'
    },
    {
      name: 'y',
      brief: 'y element ',
    ref: 'structvrvec4.html#1a393848eebba71f9d641af0b092bd5a3f'
    },
    {
      name: 'getLengthSq',
      brief: 'vrLengthSquared) Returns the squared length of a vector',
    ref: 'structvrvec4.html#1a39801c432e531deef6da074e1c3ddba2'
    },
    {
      name: 'zx',
      brief: 'zx elements ',
    ref: 'structvrvec4.html#1a3b41e376419623f2e3670209451f5e71'
    },
    {
      name: 'zwy',
      brief: 'zwy elements ',
    ref: 'structvrvec4.html#1a3e58b5213f06253658c21bfed1148326'
    },
    {
      name: 'zxw',
      brief: 'zxw elements ',
    ref: 'structvrvec4.html#1a417c7d7ad431e41fe5c31c906d8efb57'
    },
    {
      name: 'zxy',
      brief: 'zxy elements ',
    ref: 'structvrvec4.html#1a482be21bb02dba2a92613acafe438cae'
    },
    {
      name: 'zyxw',
      brief: 'zyxw elements ',
    ref: 'structvrvec4.html#1a4a0252ad1691a3bc1742a65a658f1648'
    },
    {
      name: 'ywz',
      brief: 'ywz elements ',
    ref: 'structvrvec4.html#1a4aae70b5131eaca71b7649c50a115ba0'
    },
    {
      name: 'ywzx',
      brief: 'ywzx elements ',
    ref: 'structvrvec4.html#1a4af9130db16d9c2ba6eb8e89e54458bf'
    },
    {
      name: 'wxz',
      brief: 'wxz elements ',
    ref: 'structvrvec4.html#1a4b4795256877f98eb3830d0eeddcb9b3'
    },
    {
      name: 'wzyx',
      brief: 'wzyx elements ',
    ref: 'structvrvec4.html#1a4f75799601fd2d5ff58d560ff797da81'
    },
    {
      name: 'xyz',
      brief: 'xyz elements ',
    ref: 'structvrvec4.html#1a4f8e6d8e8125745ac1245c624a26e444'
    },
    {
      name: 'wxyz',
      brief: 'wxyz elements ',
    ref: 'structvrvec4.html#1a5183b0988d7f74da93bdec9391c60889'
    },
    {
      name: 'zwxy',
      brief: 'zwxy elements ',
    ref: 'structvrvec4.html#1a5214174ad49f601f90cbc3db017756cc'
    },
    {
      name: 'xzwy',
      brief: 'xzwy elements ',
    ref: 'structvrvec4.html#1a58c0a61d5e6701e9205babbabb5a4544'
    },
    {
      name: 'zywx',
      brief: 'zywx elements ',
    ref: 'structvrvec4.html#1a5d97655cbda20ebeeef43add5bca82b8'
    },
    {
      name: 'yzxw',
      brief: 'yzxw elements ',
    ref: 'structvrvec4.html#1a5ee02590fd185808c77b7a15f1cd0356'
    },
    {
      name: 'zxyw',
      brief: 'zxyw elements ',
    ref: 'structvrvec4.html#1a66d9360580c3fd8deeb16cdfcead7fcb'
    },
    {
      name: 'getLength',
      brief: 'vrLength) Returns the length of a vector',
    ref: 'structvrvec4.html#1a66f72c143340ce0f7fa6876fb2ce04c0'
    },
    {
      name: 'xz',
      brief: 'xz elements ',
    ref: 'structvrvec4.html#1a682fb01a1ad9244c795971b8dad03c35'
    },
    {
      name: 'operator-',
      brief: '',
    ref: 'structvrvec4.html#1a75bc7453724b0a027cd30e271cb85959'
    },
    {
      name: 'operator/',
      brief: '',
    ref: 'structvrvec4.html#1a76d32eabf8fa4988d3fe4f3ca2781afa'
    },
    {
      name: 'yzw',
      brief: 'yzw elements ',
    ref: 'structvrvec4.html#1a7ae91c2d3d1fa20c6b9ac8df1cfffd70'
    },
    {
      name: 'wyzx',
      brief: 'wyzx elements ',
    ref: 'structvrvec4.html#1a7bc9d5b964cc38b8afecec128aac3813'
    },
    {
      name: 'xwzy',
      brief: 'xwzy elements ',
    ref: 'structvrvec4.html#1a7c01b7ea49d893995a94962690bdb3de'
    },
    {
      name: 'xy',
      brief: 'xy elements ',
    ref: 'structvrvec4.html#1a7eef6bc723aa4bc82cdbf00646c4d6da'
    },
    {
      name: 'xzy',
      brief: 'xzy elements ',
    ref: 'structvrvec4.html#1a81fdddc603f7e182c432b062e9d2dee0'
    },
    {
      name: 'zwx',
      brief: 'zwx elements ',
    ref: 'structvrvec4.html#1a82e9b983adba77fc412dada6b55c103b'
    },
    {
      name: 'copy',
      brief: 'vrCopy) Returns a copy of a Vector, Matrix, Ray, Sphere, AABBox, Quaternion or Plane ',
    ref: 'structvrvec4.html#1a82ece3f619e1e34569e9cf1d18735db9'
    },
    {
      name: 'xwz',
      brief: 'xwz elements ',
    ref: 'structvrvec4.html#1a83f882736df6309d49130a840f4a74b2'
    },
    {
      name: 'xw',
      brief: 'xw elements ',
    ref: 'structvrvec4.html#1a841af39e3946ca4059b54332925d0264'
    },
    {
      name: 'xzw',
      brief: 'xzw elements ',
    ref: 'structvrvec4.html#1a88b90c993c1187937407519a122812ca'
    },
    {
      name: 'operator+',
      brief: '',
    ref: 'structvrvec4.html#1a8b529ecfcda966836cefda72539d6c7e'
    },
    {
      name: 'xyzw',
      brief: 'xyzw elements ',
    ref: 'structvrvec4.html#1a94f4a95dc7a4313d0d1d924884774d5e'
    },
    {
      name: 'yx',
      brief: 'yx elements ',
    ref: 'structvrvec4.html#1a9547b36dda2a482901c9313ed05ef855'
    },
    {
      name: 'ywxz',
      brief: 'ywxz elements ',
    ref: 'structvrvec4.html#1a95b95fae079dc40c7b9b1e22aacfb1a1'
    },
    {
      name: 'zwyx',
      brief: 'zwyx elements ',
    ref: 'structvrvec4.html#1a961a75296d403565acc94b76acd92c36'
    },
    {
      name: 'yz',
      brief: 'yz elements ',
    ref: 'structvrvec4.html#1a9abf16045b02089642e3f3ce3b332345'
    },
    {
      name: 'wyz',
      brief: 'wyz elements ',
    ref: 'structvrvec4.html#1a9f0bb9da76053754047610bc51895529'
    },
    {
      name: 'zyw',
      brief: 'zyw elements ',
    ref: 'structvrvec4.html#1aa24a82048727ced5e16fad25f3de7b96'
    },
    {
      name: 'cross',
      brief: 'vrCross) Returns the cross product of two vectors',
    ref: 'structvrvec4.html#1aa3501cfa3e0da5c8140a7f5083681cd6'
    },
    {
      name: 'operator*',
      brief: '',
    ref: 'structvrvec4.html#1aaffe30215e829d8f93c9bd2a3f54aaf0'
    },
    {
      name: 'xyw',
      brief: 'xyw elements ',
    ref: 'structvrvec4.html#1ab082798b23fe05b99001b5bfc39f12e5'
    },
    {
      name: 'wxzy',
      brief: 'wxzy elements ',
    ref: 'structvrvec4.html#1ab46011d363c6679e48b5e009164eb4ff'
    },
    {
      name: 'zy',
      brief: 'zy elements ',
    ref: 'structvrvec4.html#1ac1dfaf2bb6044f4715e7fc631b4e2ca5'
    },
    {
      name: 'zxwy',
      brief: 'zxwy elements ',
    ref: 'structvrvec4.html#1ac2f74905319e0fd8ebed6c7d9b278518'
    },
    {
      name: 'ywx',
      brief: 'ywx elements ',
    ref: 'structvrvec4.html#1ac31ff834a38aa4b73d714a426c691178'
    },
    {
      name: 'xwy',
      brief: 'xwy elements ',
    ref: 'structvrvec4.html#1ac44435a4f3b350db74765702f3f2a215'
    },
    {
      name: 'wx',
      brief: 'wx elements ',
    ref: 'structvrvec4.html#1ac886cb390833f513bf988697fdc69722'
    },
    {
      name: 'x',
      brief: 'x element ',
    ref: 'structvrvec4.html#1ac94945a4f84cb4745125136e55a230b6'
    },
    {
      name: 'wyxz',
      brief: 'wyxz elements ',
    ref: 'structvrvec4.html#1acaa46bace24894d5742967eaa8994ae7'
    },
    {
      name: 'yxwz',
      brief: 'yxwz elements ',
    ref: 'structvrvec4.html#1acf5ebb58b12b668da5af76205ebb8f98'
    },
    {
      name: 'yxzw',
      brief: 'yxzw elements ',
    ref: 'structvrvec4.html#1ad11cd103a8101f4f4d3f6b994619d3e3'
    },
    {
      name: 'yxz',
      brief: 'yxz elements ',
    ref: 'structvrvec4.html#1ad8e1d1ae3423d8e40a4ae63a01645145'
    },
    {
      name: 'normalise',
      brief: 'vrNormalise) Returns normalised vector/matrix',
    ref: 'structvrvec4.html#1ad8e9385573fba2eee0707f20f22fa816'
    },
    {
      name: 'xwyz',
      brief: 'xwyz elements ',
    ref: 'structvrvec4.html#1ae4c18894c9b52074cfb1d6e8bb7a73fe'
    },
    {
      name: 'xzyw',
      brief: 'xzyw elements ',
    ref: 'structvrvec4.html#1ae5635f47e21a43a746f9658eedf839aa'
    },
    {
      name: 'wy',
      brief: 'wy elements ',
    ref: 'structvrvec4.html#1aea5e0b20113497b01e39ebb27fd9726f'
    },
    {
      name: 'operator=',
      brief: '',
    ref: 'structvrvec4.html#1aeafbd7b84e99ac7aece3b8355832171c'
    },
    {
      name: 'w',
      brief: 'w element ',
    ref: 'structvrvec4.html#1aef3a4350262b18b84d39962785a3ca52'
    },
    {
      name: 'wz',
      brief: 'wz elements ',
    ref: 'structvrvec4.html#1af5273daf4cbfd771979079e1061b4feb'
    },
    {
      name: 'zw',
      brief: 'zw elements ',
    ref: 'structvrvec4.html#1af94534bc88287bfa3aa6f37892d24d94'
    },
    {
      name: 'Advanced Topics',
      brief: 'This section documents advanced functionality like semantics and shaders',
      ref: 'advanced.html'
    },
    {
      name: 'Application Commands',
      brief: 'Application command listing and description',
      ref: 'advanced_appcommands.html'
    },
    {
      name: 'Metanode Versioning',
      brief: 'A description of how metanode versioning and migrations work to ensure cross-version compatibility',
      ref: 'advanced_metanode_versioning.html'
    },
    {
      name: 'Semantics',
      brief: 'A description of what semantics and hints are and how they can be applied to affect the behaviour of the application',
      ref: 'advanced_semantics.html'
    },
    {
      name: 'API Diagram',
      brief: 'Diagram of VRTree systems and their interactions',
      ref: 'api_diagram.html'
    },
    {
      name: 'Using the Script Editor',
      brief: 'This page gives an introduction to using the script editor',
      ref: 'applua_intro.html'
    },
    {
      name: 'Architecture',
      brief: 'This section describes how to use this SDK to affect data in Visionary Render',
      ref: 'architecture.html'
    },
    {
      name: 'Best Practices',
      brief: 'This page documents some best practices when using the VRTree API',
      ref: 'best_practices.html'
    },
    {
      name: 'Changelog',
      brief: 'This section lists API changes between different versions of Visionary Render',
      ref: 'changes.html'
    },
    {
      name: 'Add a Context Menu',
      brief: 'Demonstrates how to insert context menu items and link them to plugin functions',
      ref: 'context_menu_howto.html'
    },
    {
      name: 'Define a Custom MetaNode',
      brief: 'Demonstrates registration and usage of a custom node type',
      ref: 'define_metanode_howto.html'
    },
    {
      name: 'Present a Modal Dialog',
      brief: 'Demonstrates presenting messages and questions to the user',
      ref: 'dialog_howto.html'
    },
    {
      name: 'Enabling/Disabling Plugins at Runtime',
      brief: 'How to ensure your plugin cleanly unloads and reloads itself within Visionary Render',
      ref: 'dynamic_loading.html'
    },
    {
      name: 'Using the Script Event System',
      brief: 'This page gives an introduction to the script event system and registers',
      ref: 'eventlua_intro.html'
    },
    {
      name: 'Provide a Data Exporter',
      brief: 'Demonstrates the implementation of functions required to provide a data exporter',
      ref: 'exporter_howto.html'
    },
    {
      name: 'Use the Foreign Function Interface (FFI)',
      brief: 'Demonstrates usage of the FFI to interact with the Visionary Render Lua environment',
      ref: 'ffi_howto.html'
    },
    {
      name: 'Getting Started',
      brief: 'You can program Visionary Render to optimise your workflow or improve your user experience',
      ref: 'getting_started.html'
    },
    {
      name: 'How To',
      brief: 'This section provides tutorials on how to achieve specific tasks with scripts and plugins',
      ref: 'howto.html'
    },
    {
      name: 'Scripts',
      brief: 'This section provides tutorials on how to achieve specific tasks with Lua scripts',
      ref: 'howto_lua.html'
    },
    {
      name: 'Plugins',
      brief: 'This section provides tutorials on how to achieve specific tasks with Lua and native plugins',
      ref: 'howto_plugins.html'
    },
    {
      name: 'Provide a Data Importer',
      brief: 'Demonstrates the implementation of functions required to provide a data importer',
      ref: 'importer_howto.html'
    },
    {
      name: 'Overview',
      brief: 'Welcome to the Visionary Render Programming Guide! This guide will teach you how to interact with Visionary Render by writing code',
      ref: 'indexpage.html'
    },
    {
      name: 'Write to the Application Log',
      brief: 'Demonstrates how to write information to the application log',
      ref: 'logging_howto.html'
    },
    {
      name: 'Work with Assembly Nodes',
      brief: 'Using Lua to interact with Assembly nodes',
      ref: 'lua_assembly_howto.html'
    },
    {
      name: 'Work with Audio Nodes',
      brief: 'Using Lua to interact with audio nodes',
      ref: 'lua_audio_howto.html'
    },
    {
      name: 'Reference External Data Using the COM',
      brief: 'Using Lua and the Microsoft Component Object Model ',
      ref: 'lua_com.html'
    },
    {
      name: 'Coroutines in Lua Plugins',
      brief: 'Using coroutines to handle tasks that span multiple frames',
      ref: 'lua_coroutines.html'
    },
    {
      name: 'Work with Light Nodes',
      brief: 'Using Lua to interact with Light nodes',
      ref: 'lua_light_howto.html'
    },
    {
      name: 'Work with Level of Detail and GeoGroup Nodes',
      brief: 'Using Lua to interact with LOD and GeoGroup nodes',
      ref: 'lua_lodgeo_howto.html'
    },
    {
      name: 'Work with Material Nodes',
      brief: 'Using Lua to interact with material nodes',
      ref: 'lua_material_howto.html'
    },
    {
      name: 'Work with Metadata and Attribute Nodes',
      brief: 'Using Lua to interact with Metadata and Attributes',
      ref: 'lua_metadata_howto.html'
    },
    {
      name: 'Work with Observers',
      brief: 'Using Lua to observe changes to nodes',
      ref: 'lua_observers_howto.html'
    },
    {
      name: 'Using LuaSQL for ODBC Connections',
      brief: 'Using ODBC drivers to interact with databases such as MySQL',
      ref: 'lua_odbc.html'
    },
    {
      name: 'Work with Sequence Nodes',
      brief: 'Using Lua to interact with Sequence nodes',
      ref: 'lua_sequence_howto.html'
    },
    {
      name: 'Work with Settings Nodes',
      brief: 'Using Lua to interact with settings nodes',
      ref: 'lua_settings_howto.html'
    },
    {
      name: 'Work with Movie Nodes',
      brief: 'Using Lua to interact with movie nodes',
      ref: 'lua_video_howto.html'
    },
    {
      name: 'Work with Visual Nodes',
      brief: 'Using Lua to intract with Visual nodes',
      ref: 'lua_visual_howto.html'
    },
    {
      name: 'Provide a Lua Function',
      brief: 'Demonstrates implementation of a plugin function that can be registered in the script environment',
      ref: 'luafunc_howto.html'
    },
    {
      name: 'Creating a Lua Plugin',
      brief: 'This page gives an introduction to creating Lua plugins',
      ref: 'luaplugin_intro.html'
    },
    {
      name: 'Metanodes',
      brief: 'Describes the structure and purpose of a metanode',
      ref: 'metanodes.html'
    },
    {
      name: 'Nodes',
      brief: 'Describes what nodes are and how they relate to Metanodes',
      ref: 'nodes.html'
    },
    {
      name: 'Implement an Observer',
      brief: 'Demonstrates how to implement observers and discusses the concepts',
      ref: 'observer_howto.html'
    },
    {
      name: 'Observers',
      brief: 'Describes how observers are notified of tree changes',
      ref: 'observers.html'
    },
    {
      name: 'Plugin Dependencies',
      brief: 'Specifying plugin initialisation order',
      ref: 'plugin_depends.html'
    },
    {
      name: 'Plugin Search Paths',
      brief: 'Where Visionary Render looks for plugins',
      ref: 'plugin_directories.html'
    },
    {
      name: 'Creating a Native Plugin',
      brief: 'This page gives an introduction to creating native plugins',
      ref: 'plugin_intro.html'
    },
    {
      name: 'Accessing the API',
      brief: 'This page describes how to load DLLs and use the wrangler',
      ref: 'plugin_wrangle_api.html'
    },
    {
      name: 'Update the Loading Screen',
      brief: 'Demonstrates progress messages and progress bar percentages',
      ref: 'progress_howto.html'
    },
    {
      name: 'Properties',
      brief: 'Describes the types of properties that can be added to metanode definitions and how their data is stored',
      ref: 'properties.html'
    },
    {
      name: 'Scene Graph',
      brief: 'Description of scenegraph structure and best practices',
      ref: 'scenegraph.html'
    },
    {
      name: 'Writing Surface Shaders',
      brief: 'A guide to writing shaders that can be applied to materials in your scene',
      ref: 'surface_shader_intro.html'
    },
    {
      name: 'Terminating Long Scripts',
      brief: 'Describes the process when a script takes more than 30 seconds to execute',
      ref: 'terminating_long_scripts.html'
    },
    {
      name: 'Implement an Update Function',
      brief: 'Demonstrates how to receive regular updates every frame',
      ref: 'update_howto.html'
    },
    {
      name: 'Lua Event Coroutines',
      brief: 'Event handler scripts and the main Scripts console window now execute as coroutines',
      ref: 'v13x_200_lua_co.html'
    },
    {
      name: 'Lua Observers',
      brief: 'New Lua observers and additional callbacks for existing observers',
      ref: 'v13x_200_lua_observers.html'
    },
    {
      name: 'Pivot API Changes',
      brief: 'The internal implementation of pivots has been improved, and with this comes some new interfaces to simplify Lua interaction with Assemblies that are affected by a pivot point',
      ref: 'v13x_200_pivots.html'
    },
    {
      name: 'New in 2.0.0',
      brief: 'This page lists changes in version 2',
      ref: 'v13x_to_v2.html'
    },
    {
      name: 'New in 2019.3',
      brief: 'This page lists changes in version 2019',
      ref: 'v2019_2_to_v2019_3.html'
    },
    {
      name: 'New in 2020.1',
      brief: 'This page lists changes in version 2020',
      ref: 'v2019_3_to_v2020_1.html'
    },
    {
      name: 'New in 2020.2',
      brief: 'This page lists changes in version 2020',
      ref: 'v2020_1_to_v2020_2.html'
    },
    {
      name: 'New in 2021.1',
      brief: 'This page lists changes in version 2021',
      ref: 'v2020_2_to_v2021_1.html'
    },
    {
      name: 'New in 2021.2',
      brief: 'This page lists changes in version 2021',
      ref: 'v2021_1_to_v2021_2.html'
    },
    {
      name: 'New in 2021.3',
      brief: 'This page lists changes in version 2021',
      ref: 'v2021_2_to_v2021_3.html'
    },
    {
      name: 'New in 2023.2',
      brief: 'This page lists changes in version 2023',
      ref: 'v2023_1_to_v2023_2.html'
    },
    {
      name: 'New in 2024.1',
      brief: 'This page lists changes in version 2024',
      ref: 'v2023_2_to_v2024_1.html'
    },
    {
      name: 'New in 2.1.0',
      brief: 'This page lists changes in version 2',
      ref: 'v20_to_v21.html'
    },
    {
      name: 'New in 2.2.0',
      brief: 'This page lists changes in version 2',
      ref: 'v21_to_v22.html'
    },
    {
      name: 'New in 2019.2',
      brief: 'This page lists changes in version 2019',
      ref: 'v22_to_v2019_2.html'
    },
    {
      name: 'Writing View Shaders',
      brief: 'A guide to writing filters that can be applied to the screen to perform specific rendering effects',
      ref: 'view_shader_intro.html'
    }  ];
});