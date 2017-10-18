## Functions

<dl>
<dt><a href="#getLength">getLength(items, joiner)</a> ⇒ <code>Number</code></dt>
<dd><p>Get the length of the joined string</p>
</dd>
<dt><a href="#isTooLong">isTooLong(items, joiner, limit)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Check if the joined string is too long</p>
</dd>
<dt><a href="#join">join(items, [joiner], [limit], [stripMode])</a> ⇒ <code>String</code></dt>
<dd><p>Join a set of strings together
Can join regular strings in an array, or an array of arrays where
string priorities can be set.</p>
</dd>
<dt><a href="#shorten">shorten(items)</a></dt>
<dd><p>Shorten the items array (destructive)</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#JoinItemBasic">JoinItemBasic</a> : <code>String</code></dt>
<dd><p>A basic join item</p>
</dd>
<dt><a href="#JoinItemWithParams">JoinItemWithParams</a> : <code>Array</code></dt>
<dd><p>A join item with parameters
Such items can have parameters, in order:
  0: The string to join
  1: The priority of the item (higher is more important)</p>
</dd>
<dt><a href="#JoinItem">JoinItem</a> : <code><a href="#JoinItemBasic">JoinItemBasic</a></code> | <code><a href="#JoinItemWithParams">JoinItemWithParams</a></code></dt>
<dd><p>An item to join</p>
</dd>
</dl>

<a name="getLength"></a>

## getLength(items, joiner) ⇒ <code>Number</code>
Get the length of the joined string

**Kind**: global function  
**Returns**: <code>Number</code> - The total length  

| Param | Type | Description |
| --- | --- | --- |
| items | [<code>Array.&lt;JoinItem&gt;</code>](#JoinItem) | An array of items to join |
| joiner | <code>String</code> | The string to join the strings with |

<a name="isTooLong"></a>

## isTooLong(items, joiner, limit) ⇒ <code>Boolean</code>
Check if the joined string is too long

**Kind**: global function  
**Returns**: <code>Boolean</code> - True if too long, false if OK  

| Param | Type | Description |
| --- | --- | --- |
| items | [<code>Array.&lt;JoinItem&gt;</code>](#JoinItem) | An array of items to join |
| joiner | <code>String</code> | The string to join items with |
| limit | <code>Number</code> | The string length limit |

<a name="join"></a>

## join(items, [joiner], [limit], [stripMode]) ⇒ <code>String</code>
Join a set of strings together
Can join regular strings in an array, or an array of arrays where
string priorities can be set.

**Kind**: global function  
**Returns**: <code>String</code> - The final joined string  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| items | [<code>Array.&lt;JoinItem&gt;</code>](#JoinItem) |  | An array of items to join |
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

* [join(items, [joiner], [limit], [stripMode])](#join) ⇒ <code>String</code>
    * [.STRIP_MODE_REMOVE_WHOLE](#join.STRIP_MODE_REMOVE_WHOLE) : <code>String</code>
    * [.STRIP_MODE_REMOVE_CHARACTER](#join.STRIP_MODE_REMOVE_CHARACTER) : <code>String</code>

<a name="join.STRIP_MODE_REMOVE_WHOLE"></a>

### join.STRIP_MODE_REMOVE_WHOLE : <code>String</code>
Setting to remove whole items when shortening

**Kind**: static constant of [<code>join</code>](#join)  
**Read only**: true  
<a name="join.STRIP_MODE_REMOVE_CHARACTER"></a>

### join.STRIP_MODE_REMOVE_CHARACTER : <code>String</code>
Setting to remove a character at a time when shortening

**Kind**: static constant of [<code>join</code>](#join)  
**Read only**: true  
<a name="shorten"></a>

## shorten(items)
Shorten the items array (destructive)

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| items | [<code>Array.&lt;JoinItemWithParams&gt;</code>](#JoinItemWithParams) | An array of items with priorties |

<a name="JoinItemBasic"></a>

## JoinItemBasic : <code>String</code>
A basic join item

**Kind**: global typedef  
<a name="JoinItemWithParams"></a>

## JoinItemWithParams : <code>Array</code>
A join item with parameters
Such items can have parameters, in order:
  0: The string to join
  1: The priority of the item (higher is more important)

**Kind**: global typedef  
<a name="JoinItem"></a>

## JoinItem : [<code>JoinItemBasic</code>](#JoinItemBasic) \| [<code>JoinItemWithParams</code>](#JoinItemWithParams)
An item to join

**Kind**: global typedef  
