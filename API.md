## Modules

<dl>
<dt><a href="#module_join-and-shorten">join-and-shorten</a></dt>
<dd><p>join-and-shorten module</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#join-and-shorten_join">join-and-shorten:join(items, [joiner], [limit], [stripMode])</a> ⇒ <code>String</code></dt>
<dd><p>Join a set of strings together
Can join regular strings in an array, or an array of arrays where
string priorities can be set.</p>
</dd>
</dl>

<a name="module_join-and-shorten"></a>

## join-and-shorten
join-and-shorten module


* [join-and-shorten](#module_join-and-shorten)
    * [~getLength(items, joiner)](#module_join-and-shorten..getLength) ⇒ <code>Number</code>
    * [~isTooLong(items, joiner, limit)](#module_join-and-shorten..isTooLong) ⇒ <code>Boolean</code>
    * [~shorten(items)](#module_join-and-shorten..shorten)
    * [~JoinItemBasic](#module_join-and-shorten..JoinItemBasic) : <code>String</code>
    * [~JoinItemWithParams](#module_join-and-shorten..JoinItemWithParams) : <code>Array</code>
    * [~JoinItem](#module_join-and-shorten..JoinItem) : <code>JoinItemBasic</code> \| <code>JoinItemWithParams</code>

<a name="module_join-and-shorten..getLength"></a>

### join-and-shorten~getLength(items, joiner) ⇒ <code>Number</code>
Get the length of the joined string

**Kind**: inner method of [<code>join-and-shorten</code>](#module_join-and-shorten)  
**Returns**: <code>Number</code> - The total length  

| Param | Type | Description |
| --- | --- | --- |
| items | <code>Array.&lt;JoinItem&gt;</code> | An array of items to join |
| joiner | <code>String</code> | The string to join the strings with |

<a name="module_join-and-shorten..isTooLong"></a>

### join-and-shorten~isTooLong(items, joiner, limit) ⇒ <code>Boolean</code>
Check if the joined string is too long

**Kind**: inner method of [<code>join-and-shorten</code>](#module_join-and-shorten)  
**Returns**: <code>Boolean</code> - True if too long, false if OK  

| Param | Type | Description |
| --- | --- | --- |
| items | <code>Array.&lt;JoinItem&gt;</code> | An array of items to join |
| joiner | <code>String</code> | The string to join items with |
| limit | <code>Number</code> | The string length limit |

<a name="module_join-and-shorten..shorten"></a>

### join-and-shorten~shorten(items)
Shorten the items array (destructive)

**Kind**: inner method of [<code>join-and-shorten</code>](#module_join-and-shorten)  

| Param | Type | Description |
| --- | --- | --- |
| items | <code>Array.&lt;JoinItemWithParams&gt;</code> | An array of items with priorties |

<a name="module_join-and-shorten..JoinItemBasic"></a>

### join-and-shorten~JoinItemBasic : <code>String</code>
A basic join item

**Kind**: inner typedef of [<code>join-and-shorten</code>](#module_join-and-shorten)  
<a name="module_join-and-shorten..JoinItemWithParams"></a>

### join-and-shorten~JoinItemWithParams : <code>Array</code>
A join item with parameters
Such items can have parameters, in order:
  0: The string to join
  1: The priority of the item (higher is more important)

**Kind**: inner typedef of [<code>join-and-shorten</code>](#module_join-and-shorten)  
<a name="module_join-and-shorten..JoinItem"></a>

### join-and-shorten~JoinItem : <code>JoinItemBasic</code> \| <code>JoinItemWithParams</code>
An item to join

**Kind**: inner typedef of [<code>join-and-shorten</code>](#module_join-and-shorten)  
<a name="join-and-shorten_join"></a>

## join-and-shorten:join(items, [joiner], [limit], [stripMode]) ⇒ <code>String</code>
Join a set of strings together
Can join regular strings in an array, or an array of arrays where
string priorities can be set.

**Kind**: global function  
**Returns**: <code>String</code> - The final joined string  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| items | <code>Array.&lt;JoinItem&gt;</code> |  | An array of items to join |
| [joiner] | <code>String</code> | <code>_</code> | The string to join the items with |
| [limit] | <code>Number</code> |  | The string length limit |
| [stripMode] | <code>String</code> |  | The mode with which to strip items |

**Example**  
```js
// Basic join:
join(["one", "two", "three"]); // "one_two_three"
// With options:
join(["one", "two", "three"], "-", 8); // "one-two"
// With priorities:
join([
    ["one", 2],
    ["two", 1],
    ["three", 3]
], ".", 11); // "one.three"
```
