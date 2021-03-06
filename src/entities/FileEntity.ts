interface FileEntity {
  id: string;
  name: string;
  type: string;
  userId: string;
  duration?: number;
  size?: number;
}

export default FileEntity;
