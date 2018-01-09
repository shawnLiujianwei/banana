define(['underscore'],
function (_) {
  "use strict";

  return function Settings (options) {
    /**
     * To add a setting, you MUST define a default. Also,
     * THESE ARE ONLY DEFAULTS.
     * They are overridden by config.js in the root directory
     * @type {Object}
     */
    var defaults = {
      solr: "http://"+window.location.hostname+":8983/solr/",
      solr_core: "logs",
      timefield: "timestamp_tdt",
      USE_ADMIN_LUKE: true,
      USE_ADMIN_CORES: true,
      panel_names: [],
      banana_index: "system_banana",
      // uncomment the following line to specify the URL of banana-int
      // banana_server: "http://localhost:8983/solr/",

      // Specify whether or not to enable the login page redirection when encounter 401 error.
      // If enable_login_page = true and login_page_url = '', then Banana will redirect to Fusion login page.
      enable_login_page: true,
      login_page_url: '',

      // Specify the number of requests to retry (when encounter 401 error) before redirecting to a login page,
      // and the number of milliseconds between retries.
      enable_retries: false,
      max_retries: 10,
      wait_between_retries: 1000,

      // Lucidworks Fusion settings
      USE_FUSION: true,  
      apollo: "/api/apollo",
      apollo_queryPipeline: "/api/apollo/query-pipelines/",
      apollo_indexPipeline: "/api/apollo/index-pipelines/",

      SYSTEM_BANANA_QUERY_PIPELINE: "/api/apollo/query-pipelines/default/collections/system_banana",
      SYSTEM_BANANA_INDEX_PIPELINE: "/api/apollo/index-pipelines/_system/collections/system_banana",
      SYSTEM_BANANA_BLOB_API: "/api/apollo/blobs",
      SYSTEM_BANANA_BLOB_ID_SUBTYPE_PARAM: "resourceType=banana",  // for use when saving dashboards, to create metadata field resourceType=banana
      SYSTEM_BANANA_BLOB_ID_SUBTYPE_QUERY: "resourceType=banana",  // for use when searching dashboards in Blob Store

      FUSION_API_STATIC_FIELDS: "/schema/fields",
      FUSION_API_DYNAMIC_FIELDS: "/schema/dynamicfields",
      FUSION_API_COLLECTIONS: "/api/apollo/collections"
    };

    // This initializes a new hash on purpose, to avoid adding parameters to
    // config.js without providing sane defaults
    var settings = {};
    _.each(defaults, function(value, key) {
      settings[key] = typeof options[key] !== 'undefined' ? options[key]  : defaults[key];
    });

    return settings;
  };
});
