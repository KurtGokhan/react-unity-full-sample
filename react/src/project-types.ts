//
// Types in assemblies: Assembly-CSharp, Assembly-CSharp-Editor
// Generated 3.07.2021 18:55:02
//
import { Facebook, InlineStyleRemap, ReactUnity, System, UnityEditor, UnityEngine } from '@reactunity/renderer';

export declare class CameraRotater {
  constructor();
  useGUILayout: boolean;
  runInEditMode: boolean;
  enabled: boolean;
  isActiveAndEnabled: boolean;
  transform: UnityEngine.Transform;
  gameObject: UnityEngine.GameObject;
  tag: string;
  rigidbody: UnityEngine.Component;
  rigidbody2D: UnityEngine.Component;
  camera: UnityEngine.Component;
  light: UnityEngine.Component;
  animation: UnityEngine.Component;
  constantForce: UnityEngine.Component;
  renderer: UnityEngine.Component;
  audio: UnityEngine.Component;
  networkView: UnityEngine.Component;
  collider: UnityEngine.Component;
  collider2D: UnityEngine.Component;
  hingeJoint: UnityEngine.Component;
  particleSystem: UnityEngine.Component;
  name: string;
  hideFlags: UnityEngine.HideFlags;
  IsInvoking(): boolean;
  CancelInvoke(): void;
  Invoke(methodName: string, time: number): void;
  InvokeRepeating(methodName: string, time: number, repeatRate: number): void;
  CancelInvoke(methodName: string): void;
  IsInvoking(methodName: string): boolean;
  StartCoroutine(methodName: string): UnityEngine.Coroutine;
  StartCoroutine(methodName: string, value: any): UnityEngine.Coroutine;
  StartCoroutine(routine: System.Collections.IEnumerator): UnityEngine.Coroutine;
  StartCoroutine_Auto(routine: System.Collections.IEnumerator): UnityEngine.Coroutine;
  StopCoroutine(routine: System.Collections.IEnumerator): void;
  StopCoroutine(routine: UnityEngine.Coroutine): void;
  StopCoroutine(methodName: string): void;
  StopAllCoroutines(): void;
  GetComponent(type: System.Type): UnityEngine.Component;
  GetComponent(type: string): UnityEngine.Component;
  GetComponentInChildren(t: System.Type, includeInactive: boolean): UnityEngine.Component;
  GetComponentInChildren(t: System.Type): UnityEngine.Component;
  GetComponentsInChildren(t: System.Type, includeInactive: boolean): UnityEngine.Component[];
  GetComponentsInChildren(t: System.Type): UnityEngine.Component[];
  GetComponentInParent(t: System.Type, includeInactive: boolean): UnityEngine.Component;
  GetComponentInParent(t: System.Type): UnityEngine.Component;
  GetComponentsInParent(t: System.Type, includeInactive: boolean): UnityEngine.Component[];
  GetComponentsInParent(t: System.Type): UnityEngine.Component[];
  GetComponents(type: System.Type): UnityEngine.Component[];
  GetComponents(type: System.Type, results: UnityEngine.Component[]): void;
  CompareTag(tag: string): boolean;
  SendMessageUpwards(methodName: string, value: any, options: UnityEngine.SendMessageOptions): void;
  SendMessageUpwards(methodName: string, value: any): void;
  SendMessageUpwards(methodName: string): void;
  SendMessageUpwards(methodName: string, options: UnityEngine.SendMessageOptions): void;
  SendMessage(methodName: string, value: any): void;
  SendMessage(methodName: string): void;
  SendMessage(methodName: string, value: any, options: UnityEngine.SendMessageOptions): void;
  SendMessage(methodName: string, options: UnityEngine.SendMessageOptions): void;
  BroadcastMessage(methodName: string, parameter: any, options: UnityEngine.SendMessageOptions): void;
  BroadcastMessage(methodName: string, parameter: any): void;
  BroadcastMessage(methodName: string): void;
  BroadcastMessage(methodName: string, options: UnityEngine.SendMessageOptions): void;
  GetInstanceID(): number;
  GetHashCode(): number;
  Equals(other: any): boolean;
  ToString(): string;
  GetType(): System.Type;
}
export declare class CustomButtonComponent {
  constructor(context: ReactUnity.UGUI.UGUIContext, backgroundColor: UnityEngine.Color);
  DefaultStyle: ReactUnity.Styling.NodeStyle;
  DefaultLayout: Facebook.Yoga.YogaNode;
  Button: UnityEngine.UI.Button;
  GameObject: UnityEngine.GameObject;
  RectTransform: UnityEngine.RectTransform;
  Component: ReactUnity.UGUI.Layout.ReactElement;
  BorderAndBackground: ReactUnity.Styling.BorderAndBackground;
  MaskAndImage: ReactUnity.Styling.MaskAndImage;
  Selectable: UnityEngine.UI.Selectable;
  CanvasGroup: UnityEngine.CanvasGroup;
  Canvas: UnityEngine.Canvas;
  Container: UnityEngine.RectTransform;
  TextContent: string;
  Name: string;
  Context: ReactUnity.UGUI.UGUIContext;
  Parent: ReactUnity.IContainerComponent;
  Data: ReactUnity.Styling.InlineData;
  Layout: Facebook.Yoga.YogaNode;
  ComputedStyle: ReactUnity.Styling.NodeStyle;
  StyleState: ReactUnity.Styling.StyleState;
  StateStyles: ReactUnity.Styling.StateStyles;
  Style: InlineStyleRemap;
  IsPseudoElement: boolean;
  Tag: string;
  ClassName: string;
  ClassList: System.Collections.Generic.HashSet<string>;
  IsContainer: boolean;
  Children: ReactUnity.IReactComponent[];
  BeforeRules: ReactUnity.StyleEngine.RuleTreeNode<ReactUnity.StyleEngine.StyleData>[];
  AfterRules: ReactUnity.StyleEngine.RuleTreeNode<ReactUnity.StyleEngine.StyleData>[];
  BeforePseudo: ReactUnity.IReactComponent;
  AfterPseudo: ReactUnity.IReactComponent;
  SetEventListener(eventName: string, callback: ReactUnity.Helpers.Callback): void;
  Update(): void;
  DestroySelf(): void;
  SetProperty(propertyName: string, value: any): void;
  UpdateBackgroundGraphic(updateLayout: boolean, updateStyle: boolean): ReactUnity.Styling.BorderAndBackground;
  GetRelativePosition(x: number, y: number): UnityEngine.Vector2;
  GetComponent(type: System.Type): any;
  AddComponent(type: System.Type): any;
  Destroy(): void;
  SetParent(newParent: ReactUnity.IContainerComponent, relativeTo?: ReactUnity.IReactComponent, insertAfter?: boolean): void;
  SetData(propertyName: string, value: any): void;
  UpdateClasses(oldClassName: string, oldClassList: System.Collections.Generic.HashSet<string>): void;
  ScheduleLayout(): void;
  ResolveStyle(recursive?: boolean): void;
  ApplyStyles(): void;
  ApplyLayoutStyles(): void;
  QuerySelector(query: string): ReactUnity.IReactComponent;
  QuerySelectorAll(query: string): ReactUnity.IReactComponent[];
  Accept(visitor: ReactUnity.Visitors.ReactComponentVisitor): void;
  AddBefore(): void;
  RemoveBefore(): void;
  AddAfter(): void;
  RemoveAfter(): void;
  RegisterChild(child: ReactUnity.IReactComponent, index?: number): void;
  UnregisterChild(child: ReactUnity.IReactComponent): void;
  Equals(obj: any): boolean;
  GetHashCode(): number;
  GetType(): System.Type;
  ToString(): string;
}
export declare class CustomComponentInitializer {
  constructor();
  useGUILayout: boolean;
  runInEditMode: boolean;
  enabled: boolean;
  isActiveAndEnabled: boolean;
  transform: UnityEngine.Transform;
  gameObject: UnityEngine.GameObject;
  tag: string;
  rigidbody: UnityEngine.Component;
  rigidbody2D: UnityEngine.Component;
  camera: UnityEngine.Component;
  light: UnityEngine.Component;
  animation: UnityEngine.Component;
  constantForce: UnityEngine.Component;
  renderer: UnityEngine.Component;
  audio: UnityEngine.Component;
  networkView: UnityEngine.Component;
  collider: UnityEngine.Component;
  collider2D: UnityEngine.Component;
  hingeJoint: UnityEngine.Component;
  particleSystem: UnityEngine.Component;
  name: string;
  hideFlags: UnityEngine.HideFlags;
  reactUnity: ReactUnity.UGUI.ReactUnityUGUI;
  customButtonColor: UnityEngine.Color;
  IsInvoking(): boolean;
  CancelInvoke(): void;
  Invoke(methodName: string, time: number): void;
  InvokeRepeating(methodName: string, time: number, repeatRate: number): void;
  CancelInvoke(methodName: string): void;
  IsInvoking(methodName: string): boolean;
  StartCoroutine(methodName: string): UnityEngine.Coroutine;
  StartCoroutine(methodName: string, value: any): UnityEngine.Coroutine;
  StartCoroutine(routine: System.Collections.IEnumerator): UnityEngine.Coroutine;
  StartCoroutine_Auto(routine: System.Collections.IEnumerator): UnityEngine.Coroutine;
  StopCoroutine(routine: System.Collections.IEnumerator): void;
  StopCoroutine(routine: UnityEngine.Coroutine): void;
  StopCoroutine(methodName: string): void;
  StopAllCoroutines(): void;
  GetComponent(type: System.Type): UnityEngine.Component;
  GetComponent(type: string): UnityEngine.Component;
  GetComponentInChildren(t: System.Type, includeInactive: boolean): UnityEngine.Component;
  GetComponentInChildren(t: System.Type): UnityEngine.Component;
  GetComponentsInChildren(t: System.Type, includeInactive: boolean): UnityEngine.Component[];
  GetComponentsInChildren(t: System.Type): UnityEngine.Component[];
  GetComponentInParent(t: System.Type, includeInactive: boolean): UnityEngine.Component;
  GetComponentInParent(t: System.Type): UnityEngine.Component;
  GetComponentsInParent(t: System.Type, includeInactive: boolean): UnityEngine.Component[];
  GetComponentsInParent(t: System.Type): UnityEngine.Component[];
  GetComponents(type: System.Type): UnityEngine.Component[];
  GetComponents(type: System.Type, results: UnityEngine.Component[]): void;
  CompareTag(tag: string): boolean;
  SendMessageUpwards(methodName: string, value: any, options: UnityEngine.SendMessageOptions): void;
  SendMessageUpwards(methodName: string, value: any): void;
  SendMessageUpwards(methodName: string): void;
  SendMessageUpwards(methodName: string, options: UnityEngine.SendMessageOptions): void;
  SendMessage(methodName: string, value: any): void;
  SendMessage(methodName: string): void;
  SendMessage(methodName: string, value: any, options: UnityEngine.SendMessageOptions): void;
  SendMessage(methodName: string, options: UnityEngine.SendMessageOptions): void;
  BroadcastMessage(methodName: string, parameter: any, options: UnityEngine.SendMessageOptions): void;
  BroadcastMessage(methodName: string, parameter: any): void;
  BroadcastMessage(methodName: string): void;
  BroadcastMessage(methodName: string, options: UnityEngine.SendMessageOptions): void;
  GetInstanceID(): number;
  GetHashCode(): number;
  Equals(other: any): boolean;
  ToString(): string;
  GetType(): System.Type;
}
export declare class ReactWebBridge {
  constructor();
  useGUILayout: boolean;
  runInEditMode: boolean;
  enabled: boolean;
  isActiveAndEnabled: boolean;
  transform: UnityEngine.Transform;
  gameObject: UnityEngine.GameObject;
  tag: string;
  rigidbody: UnityEngine.Component;
  rigidbody2D: UnityEngine.Component;
  camera: UnityEngine.Component;
  light: UnityEngine.Component;
  animation: UnityEngine.Component;
  constantForce: UnityEngine.Component;
  renderer: UnityEngine.Component;
  audio: UnityEngine.Component;
  networkView: UnityEngine.Component;
  collider: UnityEngine.Component;
  collider2D: UnityEngine.Component;
  hingeJoint: UnityEngine.Component;
  particleSystem: UnityEngine.Component;
  name: string;
  hideFlags: UnityEngine.HideFlags;
  ReactCanvas: ReactUnity.UGUI.ReactUnityUGUI;
  TestScript: string;
  InjectableScript: UnityEngine.TextAsset;
  Test(): void;
  SetJSX(script: string): void;
  SetCSS(script: string): void;
  Render(): void;
  ReloadScene(): void;
  LoadScene(sceneName: string): void;
  IsInvoking(): boolean;
  CancelInvoke(): void;
  Invoke(methodName: string, time: number): void;
  InvokeRepeating(methodName: string, time: number, repeatRate: number): void;
  CancelInvoke(methodName: string): void;
  IsInvoking(methodName: string): boolean;
  StartCoroutine(methodName: string): UnityEngine.Coroutine;
  StartCoroutine(methodName: string, value: any): UnityEngine.Coroutine;
  StartCoroutine(routine: System.Collections.IEnumerator): UnityEngine.Coroutine;
  StartCoroutine_Auto(routine: System.Collections.IEnumerator): UnityEngine.Coroutine;
  StopCoroutine(routine: System.Collections.IEnumerator): void;
  StopCoroutine(routine: UnityEngine.Coroutine): void;
  StopCoroutine(methodName: string): void;
  StopAllCoroutines(): void;
  GetComponent(type: System.Type): UnityEngine.Component;
  GetComponent(type: string): UnityEngine.Component;
  GetComponentInChildren(t: System.Type, includeInactive: boolean): UnityEngine.Component;
  GetComponentInChildren(t: System.Type): UnityEngine.Component;
  GetComponentsInChildren(t: System.Type, includeInactive: boolean): UnityEngine.Component[];
  GetComponentsInChildren(t: System.Type): UnityEngine.Component[];
  GetComponentInParent(t: System.Type, includeInactive: boolean): UnityEngine.Component;
  GetComponentInParent(t: System.Type): UnityEngine.Component;
  GetComponentsInParent(t: System.Type, includeInactive: boolean): UnityEngine.Component[];
  GetComponentsInParent(t: System.Type): UnityEngine.Component[];
  GetComponents(type: System.Type): UnityEngine.Component[];
  GetComponents(type: System.Type, results: UnityEngine.Component[]): void;
  CompareTag(tag: string): boolean;
  SendMessageUpwards(methodName: string, value: any, options: UnityEngine.SendMessageOptions): void;
  SendMessageUpwards(methodName: string, value: any): void;
  SendMessageUpwards(methodName: string): void;
  SendMessageUpwards(methodName: string, options: UnityEngine.SendMessageOptions): void;
  SendMessage(methodName: string, value: any): void;
  SendMessage(methodName: string): void;
  SendMessage(methodName: string, value: any, options: UnityEngine.SendMessageOptions): void;
  SendMessage(methodName: string, options: UnityEngine.SendMessageOptions): void;
  BroadcastMessage(methodName: string, parameter: any, options: UnityEngine.SendMessageOptions): void;
  BroadcastMessage(methodName: string, parameter: any): void;
  BroadcastMessage(methodName: string): void;
  BroadcastMessage(methodName: string, options: UnityEngine.SendMessageOptions): void;
  GetInstanceID(): number;
  GetHashCode(): number;
  Equals(other: any): boolean;
  ToString(): string;
  GetType(): System.Type;
}
export declare class ReactNodesSample {
  constructor();
  rootVisualElement: UnityEngine.UIElements.VisualElement;
  wantsMouseMove: boolean;
  wantsMouseEnterLeaveWindow: boolean;
  wantsLessLayoutEvents: boolean;
  autoRepaintOnSceneChange: boolean;
  maximized: boolean;
  hasFocus: boolean;
  docked: boolean;
  hasUnsavedChanges: boolean;
  saveChangesMessage: string;
  minSize: UnityEngine.Vector2;
  maxSize: UnityEngine.Vector2;
  title: string;
  titleContent: UnityEngine.GUIContent;
  depthBufferBits: number;
  antiAlias: number;
  position: UnityEngine.Rect;
  name: string;
  hideFlags: UnityEngine.HideFlags;
  static ShowDefaultWindow(): void;
  Run(root?: UnityEngine.UIElements.VisualElement): void;
  Restart(root?: UnityEngine.UIElements.VisualElement): void;
  AddSelectionChange(cb: any): (() => void);
  // AddSelectionChange(cb: Jint.Native.JsValue): (() => void);
  AddPlayModeStateChange(cb: any): (() => void);
  // AddPlayModeStateChange(cb: Jint.Native.JsValue): (() => void);
  AddVisibilityChange(cb: any): (() => void);
  // AddVisibilityChange(cb: Jint.Native.JsValue): (() => void);
  AddItemsToMenu(menu: UnityEditor.GenericMenu): void;
  BeginWindows(): void;
  EndWindows(): void;
  ShowNotification(notification: UnityEngine.GUIContent): void;
  ShowNotification(notification: UnityEngine.GUIContent, fadeoutWait: number): void;
  RemoveNotification(): void;
  ShowTab(): void;
  Focus(): void;
  ShowUtility(): void;
  ShowPopup(): void;
  ShowModalUtility(): void;
  ShowAsDropDown(buttonRect: UnityEngine.Rect, windowSize: UnityEngine.Vector2): void;
  Show(): void;
  Show(immediateDisplay: boolean): void;
  ShowAuxWindow(): void;
  ShowModal(): void;
  SaveChanges(): void;
  DiscardChanges(): void;
  Close(): void;
  Repaint(): void;
  SendEvent(e: UnityEngine.Event): boolean;
  GetExtraPaneTypes(): System.Collections.Generic.IEnumerable<System.Type>;
  SetDirty(): void;
  GetInstanceID(): number;
  GetHashCode(): number;
  Equals(other: any): boolean;
  ToString(): string;
  GetType(): System.Type;
}
