
### edge_route_ip_restriction_replace.v0

| &nbsp; | &nbsp; | &nbsp; |
|---|---|---|
| edge_id | string |  |
| id | string |  |
| enabled | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| ip_policy_ids | List&lt;string&gt; | list of all IP policies that will be used to check if a source IP is allowed access to the endpoint |